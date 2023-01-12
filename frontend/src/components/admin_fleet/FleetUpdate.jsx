import React from "react";
import PropTypes from "prop-types";

function FleetUpdate({ vehicules, getVehicules }) {
  return (
    <div>
      {vehicules}
      {getVehicules}
    </div>
  );
}

export default FleetUpdate;

FleetUpdate.propTypes = {
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
