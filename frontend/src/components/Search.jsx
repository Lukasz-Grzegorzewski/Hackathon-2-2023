import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [coord1, setCoord1] = useState([]);
  const [coord2, setCoord2] = useState([]);
  const [adresse1, setAdresse1] = useState([]);
  const [adresse2, setAdresse2] = useState([]);

  const latLong = (e) => {
    e.preventDefault();

    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${adresse1}`)
      .then((res) => {
        setCoord1(res.data.features[0].geometry.coordinates);
      })
      .catch((err) => {
        console.warn(err);
      });

    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${adresse2}`)
      .then((res) => {
        setCoord2(res.data.features[0].geometry.coordinates);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(la1, lo1, la2, lo2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(la2 - la1); // deg2rad below
    const dLon = deg2rad(lo2 - lo1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(la1)) *
        Math.cos(deg2rad(la2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return Number.parseFloat(d).toFixed(3);
  }

  return (
    <div>
      <form onSubmit={latLong}>
        <label htmlFor="adresse1">adresse 1</label>
        <input
          type="text"
          id="adresse1"
          value={adresse1}
          onChange={(e) => setAdresse1(e.target.value)}
        />
        <label htmlFor="adresse2">adresse 2</label>
        <input
          type="text"
          id="adresse2"
          value={adresse2}
          onChange={(e) => setAdresse2(e.target.value)}
        />
        <input type="submit" value="envoyer" />
      </form>

      <div>{getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)} km</div>
    </div>
  );
}

export default Search;
