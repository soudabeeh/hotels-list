import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customMarkerIcon from '../../assets/icons/gps.png';
import { Hotel } from '../../models/hotel';
import Popup from '../Popup/Popup';

const customIcon = new L.Icon({
  iconUrl: customMarkerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface MapProps {
  hotels: Hotel[];
  zoom?: number;
  center?: LatLngExpression;
  mapHeight?: string;
  withPopUp?: boolean;
}

const Map = ({
  hotels,
  zoom = 12,
  center = [35.6895, 51.389],
  mapHeight = 'h-screen',
  withPopUp = true,
}: MapProps) => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  return (
    <MapContainer center={center} zoom={zoom} className={`w-full ${mapHeight}`}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {hotels?.map((hotel: Hotel) => {
        return (
          <Marker
            data-testid='hotel-marker'
            key={hotel.id}
            position={[hotel.location.lat, hotel.location.long]}
            icon={customIcon}
            eventHandlers={{
              click: () => setSelectedHotel(hotel),
            }}
          >
            {selectedHotel && withPopUp && <Popup hotel={selectedHotel} />}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
