const express = require("express");

const router = express.Router();
const multer = require("multer");
const vehiculesControllers = require("./controllers/vehicules.controller");

const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/images");
  },
  filename: (req, file, cb) => {
    const date = new Date().getTime();
    req.body.filename = `${req.body.name + date.toString()}.jpg`;
    cb(null, req.body.filename.toString());
  },
});
const uploadImg = multer({ storage: storageImg });

router.get("/vehicules", vehiculesControllers.getVehicules);
router.get("/vehicules/:id", vehiculesControllers.getVehiculeById);
router.post(
  "/vehicules/",
  uploadImg.single("file"),
  vehiculesControllers.postVehicule
);
router.put("/vehicules/:id", vehiculesControllers.patchVehiculeById);

module.exports = router;
