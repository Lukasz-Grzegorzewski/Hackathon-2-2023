const vehiculesModel = require("../models/vehicules.model");

const getVehicules = (req, res) => {
  vehiculesModel
    .findVehicules()
    .then(([vehicules]) => res.status(200).send(vehicules))
    .catch((err) => console.error(err));
};

module.exports = {
  getVehicules,
};
