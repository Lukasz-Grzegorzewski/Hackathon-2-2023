const vehiculesModel = require("../models/vehicules.model");

const getVehicules = (req, res) => {
  vehiculesModel
    .findVehicules()
    .then(([vehicules]) => res.status(200).send(vehicules))
    .catch((err) => console.error(err));
};

const getVehiculeById = (req, res) => {
  const { id } = req.params;

  vehiculesModel
    .findVehicules(id)
    .then(([vehicule]) => res.status(200).send(vehicule[0]))
    .catch((err) => console.error(err));
};

module.exports = {
  getVehicules,
  getVehiculeById,
};
