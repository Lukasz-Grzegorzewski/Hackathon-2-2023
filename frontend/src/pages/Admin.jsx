import React, { useEffect, useState } from "react";
import axios from "axios";
import FleetPost from "@components/admin_fleet/FleetPost";
import FleetUpdate from "@components/admin_fleet/FleetUpdate";
import FleetDelete from "@components/admin_fleet/FleetDelete";

function Admin() {
  const [vehicules, setVehicules] = useState([]);

  function getVehicules() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/vehicules`)
      .then((res) => {
        setVehicules(res.data);
        console.warn(res.data);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getVehicules();
  }, []);

  return (
    <div className="admin">
      <div className="admin_comp">
        <p className="admin_comp_title">Add new vehicle</p>
        <FleetPost getVehicules={() => getVehicules()} />
      </div>
      {vehicules.length >= 1 && (
        <div>
          <div className="admin_comp">
            <p className="admin_comp_title">Update vehicle</p>
            <FleetUpdate
              vehicules={vehicules}
              getVehicules={() => getVehicules()}
            />
          </div>
          <div className="admin_comp">
            <p className="admin_comp_title">Delete vehicle</p>
            <FleetDelete
              vehicules={vehicules}
              getVehicules={() => getVehicules()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
