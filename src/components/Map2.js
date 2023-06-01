import React from "react";
import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../assets/css/M.css";
import add from "../assets/css/Addproduct.module.css";
function Map2() {
  const [center, setCenter] = useState({ lat: 33.8869, lng: 9.5375 });
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  function getLocation(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation({
            loaded: true,
            coordinates: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        function (error) {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    // const mapRef=useMap();
    // if(location.loaded){
    //   mapRef.flyTo(
    //     [location.coordinates.lat,location.coordinates.lng],
    //     13,
    //     {animate:true})

    //     }else{
    //       alert("nope")
    //       console.log(location)
    //     }
    console.log(location);

    localStorage.setItem("product-info", JSON.stringify(location));
  }

  const position = [36.8065, 10.1815];
  return (
    <div>
      <div className={add.btn_container}>
      <h5 className={add.label}>Choose your location</h5>
      <button className={add.lct_btn} onClick={getLocation}>
        Locate
      </button>
      </div>
      <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=z1ocQ1Sc2iHeFyCEkeXM"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map2;
