const database = require("../../database");

const findVehicules = () => {
  return database.query("SELECT * FROM vehicules");
};

module.exports = {
  findVehicules,
};
