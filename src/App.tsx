import {
  Map,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";

const mapStyles = {
  osm_vector: "./styles/osm_vector.json",
  osm_raster: "./styles/osm_raster.json",
};

type MapStyle = keyof typeof mapStyles;

function App() {
  const [mapStyle, setMapStyle] = useState<MapStyle>("osm_vector");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 4,
        }}
        hash={true}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyles[mapStyle]}
      >
        <div>
          <select
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value as MapStyle)}
            style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
          >
            <option value="osm_vector" selected={mapStyle === "osm_vector"}>
              OSM Vector
            </option>
            <option value="osm_raster" selected={mapStyle === "osm_raster"}>
              OSM Raster
            </option>
          </select>
        </div>
        <GeolocateControl position="top-right" />
        <NavigationControl
          position="top-right"
          visualizePitch={true}
          showZoom={true}
          showCompass={true}
        />
      </Map>
    </div>
  );
}

export default App;
