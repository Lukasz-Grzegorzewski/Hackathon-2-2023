import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Vehicules({ distance }) {
  const [displayVehicule, setDisplayVehicule] = useState([]);

  const getVehicule = () => {
    axios
      .get(`http://localhost:5000/vehicules`)
      .then((res) => {
        setDisplayVehicule(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const vehiculeUrl = `http://localhost:5000/`;

  const temps = (v) => {
    return Number.parseFloat((distance / v) * 60).toFixed(1);
  };

  return (
    <div className="vehicule">
      <button type="button" onClick={getVehicule}>
        Voir les véhicules disponible
      </button>
      <div>
        {displayVehicule.length > 0 && (
          <div className="vehicule_card">
            {displayVehicule.map((v) => (
              <div key={v.id}>
                <div className="vehicule_card_name">{v.name}</div>
                <div className="vehicule_card_kmH">{v.kmH} km/h</div>
                <img
                  className="vehicule_card_img"
                  src={vehiculeUrl + v.url}
                  alt="vehicule"
                />
                <div>temps de trajet estimé : {temps(v.kmH)} min</div>
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
