// RecipeMap.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Sample country coordinates (You can expand this with more countries or use an API for dynamic lookup)

const countryCoordinates = {
  
  Japanese: { lat: 35.6762, lng: 139.6503 },
  Indian: { lat: 28.6139, lng: 77.2090 },
  croatian: {lat: 45.1000, lng: 15.2000 },
  Turkish: {lat: 38.9637, lng: 35.2433 },
  Egyptian: {lat: 26.8206, lng: 30.8025 },
  Filipino: {lat: 12.8797, lng: 121.7740 },
  Chinese: {lat: 35.8617, lng: 104.1954 },
  Tunisian: {lat: 33.8869, lng: 9.5375 },
  American: {lat: 38.7946, lng: 106.5348 },
  Italian: { lat: 41.9028, lng: 12.4964 },
  Canadian: { lat: 45.4215, lng: -75.6972 },
  Dutch: {lat: 52.1326, lng: 5.2913 },
  Greek: {lat: 39.0742, lng: 21.8243 },
  British: { lat: 51.5074, lng: -0.1278 },
  French: { lat: 48.8566, lng: 2.3522 },
  Malaysian: {lat: 4.2105, lng: 101.9758 },
  
};

const customIcon = new L.Icon({
  iconUrl: 'https://static.vecteezy.com/system/resources/previews/022/168/544/non_2x/red-pin-point-map-address-location-pointer-symbol-free-png.png',
  iconSize: [20, 30], // Adjust the size as needed
  iconAnchor: [20, 40], // Anchor point for the icon (so it points correctly)
  popupAnchor: [0, -40], // Position for the popup
});

const RecipeMap = ({ selectedCountry }) => {
  const [mapCenter, setMapCenter] = useState([51.5074, -0.1278]); // Default to UK

  useEffect(() => {
    // Dynamically update the map center based on the selected country
    if (selectedCountry && countryCoordinates[selectedCountry]) {
      setMapCenter(countryCoordinates[selectedCountry]);
    } else {
      // Fallback to a default position (if country not found)
      setMapCenter([51.5074, -0.1278]); // Default to UK if the country is not in the coordinates map
    }
  }, [selectedCountry]);

  console.log(mapCenter);
  console.log(selectedCountry);
  
  

  return (
    <div className="my-4">

      <MapContainer center={mapCenter} zoom={2} style={{ height: "400px", width: "100%" }}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {selectedCountry && countryCoordinates[selectedCountry] && (

          <Marker 
            position={countryCoordinates[selectedCountry]}
            icon={customIcon}
          >
            <Popup>{selectedCountry}</Popup>
          </Marker>
        
        )}

      </MapContainer>
    </div>
  );
};

export default RecipeMap;
