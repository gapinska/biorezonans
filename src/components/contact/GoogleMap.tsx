import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const GoogleMap: React.FC = () => {
  const latitude = 52.2297;
  const longitude = 21.0122;

  useEffect(() => {
    function initMap() {
      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 13,
      };
    }

    if (window.google && window.google.maps) {
      initMap();
    } else {
      console.error('Nie można załadować Google Maps API.');
    }
  }, [latitude, longitude]);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default GoogleMap;
