import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as doctorsData from "./data/better-doctor.json";
// import mapStyles from "./mapStyles";
// import Map from "./Map";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 42.360081, lng: -71.058884 }}
    >
      {doctorsData.data.map((doctor) => (
        <Marker key={doctor.uid.name}
          position={{
            lat: doctor.practices.visit_address.lat,
            lng: doctor.practices.visit_address.lon
          }} />

      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key=${
        process.env.REACT_APP_GOOGLE_KEY
        }`}

        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

