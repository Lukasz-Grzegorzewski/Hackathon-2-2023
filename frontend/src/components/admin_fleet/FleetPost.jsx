import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PopupAdvertAdd from "./PopupAdvertAdd";

function FleetPost({ getVehicules }) {
  const [file, setFile] = useState({});
  const [check, setCheck] = useState(false);
  const [imgDetails, setImgDetails] = useState({
    kmH: "",
    name: "",
  });

  function clearInputs() {
    setImgDetails({
      kmH: "",
      name: "",
    });
  }
  function clearFile() {
    setFile({});
  }

  const uploadAdd = (data) => {
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`, data)
      .then(() => {
        setCheck(true);
        clearInputs();
        clearFile();
        getVehicules();
      })
      .catch(() => {
        console.error("advertising not uploaded");
      });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", imgDetails.name);
    data.append("kmH", imgDetails.kmH);
    data.append("file", file);
    uploadAdd(data);
  };

  return (
    <div className="addadvert">
      <form action="" onSubmit={handleUpload} className="addadvert_form">
        <div className="addadvert_form_container">
          <label className="addadvert_form_container_label" htmlFor="title">
            File
          </label>
          <div>
            <input
              className="addadvert_form_container_input"
              type="file"
              id="file"
              name="file"
              placeholder="Choose a file"
              accept=".jpg, .png"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="addadvert_form_container">
          <label className="addadvert_form_container_label" htmlFor="title">
            Name
          </label>
          <input
            className="addadvert_form_container_input"
            type="text"
            id="name"
            value={imgDetails.name}
            placeholder="Enter the advert name"
            onChange={(e) =>
              setImgDetails({ ...imgDetails, name: e.target.value })
            }
            required
          />

          <label
            className="addadvert_form_container_label"
            htmlFor="description"
          >
            Km/H
          </label>
          <input
            className="addadvert_form_container_input"
            type="text"
            id="kmH"
            value={imgDetails.urlLink}
            placeholder="Enter the link"
            onChange={(e) =>
              setImgDetails({
                ...imgDetails,
                kmH: e.target.value,
              })
            }
            required
          />
          {check === false ? (
            <button className="shake" type="submit" value="Upload">
              Submit
            </button>
          ) : (
            <div>
              <PopupAdvertAdd setCheck={setCheck} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default FleetPost;

FleetPost.propTypes = {
  getVehicules: PropTypes.func.isRequired,
};
