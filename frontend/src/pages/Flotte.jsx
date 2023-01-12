import React, { useEffect, useState } from "react";
import axios from "axios";
import VehiculeCard from "@components/flotte/VehiculeCard";
import Race from "@components/flotte/Race";

function Flotte() {
  const [vehicules, setVehicules] = useState([]);
  const [raceVehicules, setRaceVehicules] = useState([]);
  const [isRace, setIsRace] = useState(false);
  const [noVehicules, setNoVehicules] = useState(false);

  function handleNoVehicules() {
    if (raceVehicules.length > 0) {
      setIsRace(true);
    } else {
      setNoVehicules(true);
      setTimeout(() => {
        setNoVehicules(false);
      }, 3000);
    }
  }

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
      .get(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`)
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
        {isRace && raceVehicules.length > 0 ? (
          <Race raceVehicules={raceVehicules} />
        ) : (
          <div>
            {noVehicules && (
              <div className="noRaceVehicules">
                You have not choosen any vehicule to race
              </div>
            )}
            <div className="list-and-raceBtn-container">
              <button
                type="button"
                className="btn-race stripe"
                onClick={() => handleNoVehicules()}
              >
                Race!
              </button>
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
        )}
      </div>
    )
  );
}

export default Flotte;
