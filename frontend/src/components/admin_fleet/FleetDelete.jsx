import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PopupAdvertDelete from "./PopupAdvertDelete";

function FleetDelete({ vehicules, getVehicules }) {
  const [idPub, setIdPub] = useState("");
  const [check, setCheck] = useState(false);

  const deletePub = () => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/vehicules/${idPub}`)
      .then(() => {
        setCheck(true);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleChange = (e) => {
    setIdPub(e.target.value);
  };

  return (
    <div className="deleteadvert">
      {check === false ? (
        <form className="deleteadvert_form">
          <label className="deleteadvert_form_label" htmlFor="publicity-select">
            Choose advertising to delete <br />
            <select
              className="deleteadvert_form_label_select"
              id="publicity-select"
              onChange={handleChange}
            >
              <option value="">---</option>
              {vehicules.map((infos) => {
                return (
                  <option key={infos.name} value={infos.id}>
                    {infos.name}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      ) : (
        <div className="deleteadvert_check">
          <PopupAdvertDelete setCheck={setCheck} getVehicules={getVehicules} />
        </div>
      )}
      <div className="deleteadvert_delete">
        <button
          className="shake"
          type="button"
          onClick={() => {
            deletePub();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

FleetDelete.propTypes = {
  vehicules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      kmH: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      // dispo: PropTypes.bool.isRequired,
    })
  ).isRequired,
  getVehicules: PropTypes.func.isRequired,
};

export default FleetDelete;
