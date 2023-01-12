import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { motion } from "framer-motion";

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

  useEffect(() => {
    getVehicules(raceVehicules);
  }, []);

  return (
    <div className="race-container">
      {vehicules &&
        vehicules.map((vehicule) => (
          <div key={vehicule.id} className="racers">
            <img
              className="img-racer"
              src={`${import.meta.env.VITE_PORT_BACKEND}${vehicule.url}`}
              alt="racer"
            />
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
