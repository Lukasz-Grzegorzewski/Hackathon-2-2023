const { removeBackgroundFromImageFile } = require("remove.bg");
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

  const url = `/assets/images/removedBG/${filename}`;

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

function removeBg(req, res, next) {
  const { filename } = req.body;

  const localFile = `${__dirname}/../../public/assets/images/${filename}`;
  const outputFile = `${__dirname}/../../public/assets/images/removedBG/${
    localFile.split("images/")[1]
  }`;

  removeBackgroundFromImageFile({
    path: localFile,
    // apiKey: `${process.env.API_KEY}`,
    apiKey: "nUf1hs1uh6GP46LyhXS2Cc5j",
    size: "regular",
    type: "auto",
    scale: "50%",
    outputFile,
  })
    .then(() => {
      next();
    })
    .catch((errors) => {
      console.error(JSON.stringify(errors));
    });
}

const patchVehiculeById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, kmH } = req.body;
  vehiculesModel
    .modifyVehiculeById(name, kmH, id)
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

const deleteVehiculeById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  vehiculesModel
    .eraseVehicule(id)
    .then(([category]) => {
      return category.affectedRows === 0
        ? res.status(404).send("Vehicule Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a category");
    });
};

module.exports = {
  getVehicules,
  getVehiculeById,
  postVehicule,
  patchVehiculeById,
  deleteVehiculeById,
  removeBg,
};
