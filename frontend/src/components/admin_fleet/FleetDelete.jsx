import React from "react";
import PropTypes from "prop-types";

function FleetDelete({ vehicules, getVehicules }) {
  return (
    <div>
      <div>{vehicules}</div>
      <div>{getVehicules}</div>
    </div>
  );
}

FleetDelete.propTypes = {
  vehicules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      khM: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      dispo: PropTypes.bool.isRequired,
    })
  ).isRequired,
  getVehicules: PropTypes.func.isRequired,
};

export default FleetDelete;