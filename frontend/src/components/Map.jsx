import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

function Map({ coord1, coord2 }) {
  const position = (c) => {
    const temp = [47.212374, -1.564415];
    if (c.length === 0) {
      return temp;
    }
    return c;
  };

  return (
    <MapContainer
      center={position(coord1)}
      zoom={10}
      scrollWheelZoom
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position(coord1)}>
        <Popup>Adresse n°1</Popup>
      </Marker>
      <Marker position={position(coord2)}>
        <Popup>Adresse n°2</Popup>
      </Marker>
    </MapContainer>
  );
}
Map.propTypes = {
  coord1: PropTypes.string.isRequired,
  coord2: PropTypes.string.isRequired,
};

export default Map;
