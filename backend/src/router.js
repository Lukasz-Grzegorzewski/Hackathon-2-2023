const express = require("express");

const router = express.Router();

const vehiculesControllers = require("./controllers/vehicules.controller");

router.get("/vehicules", vehiculesControllers.getVehicules);
router.get("/vehicules/:id", vehiculesControllers.getVehiculeById);

module.exports = router;
