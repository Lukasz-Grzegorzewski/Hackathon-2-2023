import React, { useEffect, useState } from "react";
import axios from "axios";
import VehiculeCard from "@components/flotte/VehiculeCard";
import { NavLink } from "react-router-dom";

function Flotte() {
  const [vehicules, setVehicules] = useState([]);
  const [raceVehicules, setRaceVehicules] = useState([]);
  //   const [isActive, setIsActive] = useState([]);

  function handleActive(id) {
    setRaceVehicules((prev) => [...prev, id]);
  }

  function getVehicules() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`)
      .then((res) => {
        setVehicules(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getVehicules();
  }, [raceVehicules]);

  return (
    vehicules && (
      <div className="flotte">
        <p className="title-flotte">Flotte</p>
        <div className="flotte-cards">
          {vehicules.map((item) => (
            <VehiculeCard
              key={item.id}
              vehicule={item}
              //   isActive={isActive}
              //   setIsActive={setIsActive}
              handleActive={() => handleActive(item.id)}
            />
          ))}
        </div>
        {raceVehicules.length > 0 && vehicules.length > 0 && (
          <div className="race-list-container">
            <div className="race-list">
              {raceVehicules.map((el) => (
                <p key={crypto.randomUUID()}>{el}</p>
              ))}
            </div>
          </div>
        )}
        <NavLink className="btn-race">Race!</NavLink>
      </div>
    )
  );
}

export default Flotte;

// console.log("isActive :", isActive[0]);
// if (raceVehicules.includes(id - 1) && isActive) {
//   const index = raceVehicules.indexOf(id);
//   raceVehicules.splice(index, 1);
// } else {
//   setRaceVehicules([...raceVehicules, id - 1]);
// }
