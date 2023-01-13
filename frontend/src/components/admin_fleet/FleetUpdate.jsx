import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function FleetUpdate({ vehicules }) {
  const [check, setCheck] = useState(false);
  const [vehiculesDetails, setVehiculesDetails] = useState({
    id: "",
    kmH: "",
    name: "",
  });

  const fu = setCheck;
  console.warn(fu);

  const modifyVehicules = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${import.meta.env.VITE_PORT_BACKEND}/vehicules/${vehiculesDetails.id}`,
        vehiculesDetails
      )
      .catch(() => {
        console.error("video not modified");
      });
  };

  return (
    <div className="update_vehicules">
      <div className="update_vehicules_title">mofifier les véhicules</div>
      {check === false ? (
        <div className="update_vehicules_selection">
          <div className="update_vehicules_selection_cont">
            <select
              className="update_vehicules_select"
              onChange={(e) => {
                setVehiculesDetails(JSON.parse(e.target.value));
              }}
            >
              <option className="update_vehicules_option" value="">
                ---
              </option>
              {vehicules.map((v) => (
                <option
                  key={v.id}
                  value={JSON.stringify({
                    id: v.id,
                    kmH: v.kmH,
                    name: v.name,
                  })}
                >
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <form onSubmit={modifyVehicules} className="update_vehicules_form">
              <div className="update_vehicules_form_container">
                <div className="update_vehicules_form_current">
                  Current name: {vehicules.name}
                </div>
                <label htmlFor="title" className="update_vehicules_name_label">
                  Change name
                </label>
                <input
                  type="text"
                  id="name"
                  className="update_vehicules_name_select"
                  value={vehiculesDetails.name}
                  placeholder={vehiculesDetails.name}
                  onChange={(e) =>
                    setVehiculesDetails({
                      ...vehiculesDetails,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="update_vehicules_form_container">
                <div className="update_vehicules_form_current">
                  Current kmH: {vehiculesDetails.kmH}
                </div>
                <label htmlFor="kmH" className="update_video_kmH_label">
                  modifier kmH
                </label>
                <input
                  type="text"
                  id="kmH"
                  className="update_video_kmH_select"
                  value={vehiculesDetails.kmH}
                  placeholder={vehiculesDetails.kmH}
                  onChange={(e) =>
                    setVehiculesDetails({
                      ...vehiculesDetails,
                      kmH: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <input type="submit" className="shake" value="Update" />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>FUCK</div>
      )}
    </div>
  );
}

export default FleetUpdate;

FleetUpdate.propTypes = {
  vehicules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      kmH: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
