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
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getVehicules();
  }, []);

  return (
    <div className="admin">
      <FleetPost getVehicules={() => getVehicules()} />
      <FleetUpdate vehicules={vehicules} getVehicules={() => getVehicules()} />
      <FleetDelete vehicules={vehicules} getVehicules={() => getVehicules()} />
    </div>
  );
}

export default Admin;
