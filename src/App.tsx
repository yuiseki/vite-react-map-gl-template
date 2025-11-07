import {
  Map,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import { Protocol as PMTilesProtocol } from "pmtiles";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState, useMemo, useCallback } from "react";

const mapStyles = {
  osm_vector: "./styles/osm_vector.json",
  osm_raster: "./styles/osm_raster.json",
  osm_pmtiles: "./styles/osm_pmtiles.json",
};

type MapStyle = keyof typeof mapStyles;

// Initialize PMTiles protocol once
let pmTilesInitialized = false;
const initializePMTiles = () => {
  if (!pmTilesInitialized) {
    const protocol = new PMTilesProtocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    pmTilesInitialized = true;
  }
};

function App() {
  // Get initial style from URL
  const initialStyle = useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const styleNameParam = queryParams.get("style");
    const styleNames = Object.keys(mapStyles);
    if (styleNameParam && styleNames.includes(styleNameParam)) {
      return styleNameParam as MapStyle;
    }
    return "osm_vector" as MapStyle;
  }, []);

  const [mapStyle, setMapStyle] = useState<MapStyle>(initialStyle);

  // Initialize PMTiles protocol
  useEffect(() => {
    initializePMTiles();
  }, []);

  const changeMapStyle = useCallback((style: MapStyle) => {
    setMapStyle(style);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("style", style);
    let newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      queryParams.toString();
    if (window.location.hash) {
      newUrl += window.location.hash;
    }
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }, []);

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
            onChange={(e) => changeMapStyle(e.target.value as MapStyle)}
            style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
          >
            <option value="osm_vector">OSM Vector</option>
            <option value="osm_raster">OSM Raster</option>
            <option value="osm_pmtiles">OSM PMTiles</option>
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
