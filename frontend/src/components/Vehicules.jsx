import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Vehicules({ distance }) {
  const [displayVehicule, setDisplayVehicule] = useState([]);

  const getVehicule = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`)
      .then((res) => {
        setDisplayVehicule(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const vehiculeUrl = `${import.meta.env.VITE_PORT_BACKEND}`;

  const temps = (v) => {
    return Number.parseFloat((distance / v) * 60).toFixed(1);
  };

  return (
    <div className="vehicule">
      <button className="shake" type="button" onClick={getVehicule}>
        Voir les véhicules disponible
      </button>
      <div>
        {displayVehicule.length > 0 && (
          <div className="vehicule_card">
            {displayVehicule.map((v) => (
              <div className="vehicule_card_detail" key={v.id}>
                <div className="vehicule_card_name">{v.name}</div>
                <div className="vehicule_card_kmH">{v.kmH} km/h</div>
                <img
                  className="vehicule_card_img"
                  src={vehiculeUrl + v.url}
                  alt="vehicule"
                />
                <div className="vehicule_card_temps">
                  temps de trajet estimé : {temps(v.kmH)} min
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Vehicules.propTypes = {
  distance: PropTypes.func.isRequired,
};

export default Vehicules;
