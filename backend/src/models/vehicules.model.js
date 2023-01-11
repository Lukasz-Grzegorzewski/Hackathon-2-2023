const database = require("../../database");

const findVehicules = () => {
  return database.query("SELECT * FROM vehicules");
};

const findVehiculeById = (id) => {
  return database.query("SELECT * FROM vehicules WHERE id = ?", [id]);
};

module.exports = {
  findVehicules,
  findVehiculeById,
};
