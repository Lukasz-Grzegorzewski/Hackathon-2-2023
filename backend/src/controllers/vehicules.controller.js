const vehiculesModel = require("../models/vehicules.model");

const getVehicules = (req, res) => {
  vehiculesModel
    .findVehicules()
    .then(([vehicules]) => res.status(200).send(vehicules))
    .catch((err) => console.error(err));
};

const getVehiculeById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  vehiculesModel
    .findVehiculeById(id)
    .then(([vehicule]) => res.status(200).send(vehicule[0]))
    .catch((err) => console.error(err));
};

const postVehicule = (req, res) => {
  const { name, kmH, filename } = req.body;

  const url = `/assets/videos/${filename}`;

  vehiculesModel
    .uploadVehicule(name, kmH, url)
    .then((/* [result] */) => {
      return (
        res
          /* .location(`/vehicules/${result.insertId}`) */
          .status(201)
          .send({ message: "vehicule added" })
      );
    })

    .catch((err) => console.warn(err));
};

const patchVehiculeById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, kmH, dispo } = req.body;
  vehiculesModel
    .modifyVehiculeById(name, kmH, dispo, id)
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("Vehicule Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.warn(err);
      return res.status(500).send("Error editing vehicule");
    });
};

module.exports = {
  getVehicules,
  getVehiculeById,
  postVehicule,
  patchVehiculeById,
};
