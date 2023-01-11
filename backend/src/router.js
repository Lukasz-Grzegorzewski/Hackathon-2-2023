const express = require("express");

const router = express.Router();

const vehiculesControllers = require("./controllers/vehicules.controller");

router.get("/vehicules", vehiculesControllers.getVehicules);
// router.get("/vehicules/:id", vehiculesControllers.read);
// router.put("/vehicules/:id", vehiculesControllers.edit);
// router.post("/vehicules", vehiculesControllers.add);
// router.delete("/vehicules/:id", vehiculesControllers.destroy);

module.exports = router;

// const itemControllers = require("./controllers/itemControllers");
// const vehiculesControllers = require("./controllers/vehiculeControllers");
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
