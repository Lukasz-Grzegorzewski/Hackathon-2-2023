import React, { useEffect, useState } from "react";
import axios from "axios";
import VehiculeCard from "@components/flotte/VehiculeCard";
import { NavLink } from "react-router-dom";

function Flotte() {
  const [vehicules, setVehicules] = useState([]);
  const [raceVehicules, setRaceVehicules] = useState([]);

  function handleActive(id) {
    if (raceVehicules.includes(id)) {
      const index = raceVehicules.indexOf(id);
      if (index > -1) {
        raceVehicules.splice(index, 1);
      }
      setRaceVehicules((prev) => [...prev.filter((el) => el !== id)]);
    } else {
      setRaceVehicules((prev) => [...prev, id]);
    }
  }

  function getVehicules() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules`)
      .then((res) => {
        setVehicules(res.data);
      })
      .catch((err) => console.error(err));
  }

  function getVehiculeName(id) {
    return vehicules[id - 1].name;
  }

  useEffect(() => {
    getVehicules();
  }, [raceVehicules]);

  return (
    vehicules && (
      <div className="flotte">
        <div className="list-and-raceBtn-container">
          <NavLink className="btn-race">
            <button type="button" className="stripe">
              Race!
            </button>{" "}
          </NavLink>
          {raceVehicules.length > 0 && vehicules.length > 0 && (
            <div className="race-list-container">
              <div className="race-list">
                {raceVehicules.map((el) => (
                  <p key={crypto.randomUUID()}>{getVehiculeName(el)}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        <p className="title-flotte">Flotte</p>
        <div className="flotte-cards">
          {vehicules.map((item) => (
            <VehiculeCard
              key={item.id}
              vehicule={item}
              handleActive={() => handleActive(item.id)}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default Flotte;
