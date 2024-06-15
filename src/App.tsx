import {
  Map,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

function App() {
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
        //mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
        mapStyle="./style.json"
      >
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
