import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import './googla-maps.css'

class MapContainer extends React.Component {
  render() {
    return (
      <div className="map">
        <h1>
        <i class="fas fa-map-marker-alt"></i>14 Rue Ghana 3000 Sfax
        </h1>
        <Map 
          google={this.props.google}
          style={{ width: "70%", height: "100%" , margin : 'auto'  }}
          zoom={13}
          initialCenter={{
            lat: 34.732637,
            lng: 10.754652,
          }}
        >
          <Marker position={{ lat: 34.732637, lng: 10.754652 }} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA5LjA5Lu9ikIt_I7hWTK-URoZSoEzTOF8",
})(MapContainer);
