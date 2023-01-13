import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { motion } from "framer-motion";

function Race({ raceVehicules }) {
  const [vehicules, setVehicules] = useState([]);

  function getVehicules(arrRaceVehicules) {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`)
      .then((res) => {
        const arrTemp = [];
        arrRaceVehicules.forEach((element) => {
          const objTemp = res.data.filter((item) => item.id === element);
          if (objTemp.length > 0) {
            arrTemp.push(objTemp[0]);
          }
        });
        setVehicules(arrTemp);
      })
      .catch((err) => console.error(err));
  }

  const width = document.body.clientWidth;
  useEffect(() => {
    getVehicules(raceVehicules);
  }, []);

  return (
    <div className="race-container">
      {vehicules &&
        vehicules.map((vehicule) => (
          <div key={vehicule.id} className="racers">
            <div className="info-container">
              <p className="vehicule-name">{vehicule.name}</p>
              <p className="vehicule-kmh">{vehicule.kmH} km/h</p>
            </div>
            <motion.div
              animate={{ x: [0, width - 110], y: [0, 0] }}
              transition={{ delay: 1, duration: (1 / vehicule.kmH) * 1000 }}
              className="spec"
            >
              <motion.img
                animate={{ rotate: [0, 600], y: [0, 1000] }}
                transition={{ delay: (1 / vehicule.kmH) * 1000, duration: 3 }}
                className="img-racer"
                src={`${import.meta.env.VITE_PORT_BACKEND}${vehicule.url}`}
                alt="racer"
              />
            </motion.div>
            <div className="track">
              <div className="lines" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Race;

Race.propTypes = {
  raceVehicules: PropTypes.arrayOf(PropTypes.number).isRequired,
};
