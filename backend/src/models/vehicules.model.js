const database = require("../../database");

const findVehicules = () => {
  return database.query("SELECT * FROM vehicules");
};

const findVehiculeById = (id) => {
  return database.query("SELECT * FROM vehicules WHERE id = ?", [id]);
};

const uploadVehicule = (name, kmH, url) => {
  return database.query(
    "INSERT INTO vehicules(name, kmH, url) VALUES (?, ?, ?)",
    [name, kmH, url]
  );
};

const modifyVehiculeById = (name, kmH, id) => {
  return database.query(`UPDATE vehicules SET name = ?, kmH = ? WHERE id = ?`, [
    name,
    kmH,
    id,
  ]);
};

const eraseVehicule = (id) => {
  return database.query("DELETE FROM vehicules WHERE id = ?", [id]);
};

module.exports = {
  findVehicules,
  findVehiculeById,
  uploadVehicule,
  modifyVehiculeById,
  eraseVehicule,
};
