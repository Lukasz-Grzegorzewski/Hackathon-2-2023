import React, { useState } from "react";
import PropTypes from "prop-types";

function VehiculeCard({
  vehicule,
  handleActive,
  //   isActive,
  //   setIsActive,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="vehicule-card">
      <button
        className="btnCard"
        type="button"
        onClick={() => {
          //   console.log([...isActive, { id: id - 1, active: !active }]);
          //   console.log(
          //     "indexOf :",
          //     isActive.indexOf((el) => el.id == id)
          //   );
          //   setIsActive([...isActive, { id, active: !active }]);
          setIsActive(!isActive);
          handleActive(vehicule.id - 1);
        }}
      >
        <img
          className="img-vehicule-card"
          src={`${import.meta.env.VITE_PORT_BACKEND}${vehicule.url}`}
          alt="vehicule"
        />
        <div className={isActive ? "icon active" : "icon"} />
        <div className="vehicule-desc">
          <p>{vehicule.name}</p>
          <p>{vehicule.kmH} km/h</p>
        </div>
      </button>
    </div>
  );
}

export default VehiculeCard;

VehiculeCard.propTypes = {
  vehicule: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    kmH: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
  handleActive: PropTypes.func.isRequired,
  //   setIsActive: PropTypes.func.isRequired,
};
