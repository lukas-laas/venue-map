"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { getAllVenues } from "@/queries";
import { latLng } from "leaflet";
import { useEffect, useState } from "react";

const CustomMarker = ({
  venue,
}: {
  venue: {
    name: string;
    address: string;
    description: string;
    longitude: string;
    latitude: string;
  };
}) => {
  return (
    <Marker
      position={latLng(parseFloat(venue.longitude), parseFloat(venue.latitude))}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e);
        },
      }}
    >
      <Popup>
        <p> {venue.name}</p>
        <p> {venue.address}</p>
        <p> {venue.description}</p>
      </Popup>
    </Marker>
  );
};

export async function Map() {
  const [venues, setVenues] = useState<any>(null);
  useEffect(() => {
    getAllVenues().then((fetchedVenues) => {
      console.log("response", fetchedVenues);
      setVenues(fetchedVenues);
    });
  }, []);
  return (
    <>
      {venues ? (
        <MapContainer
          center={[59.8512197, 17.6620915]}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%", zIndex: "10" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {venues &&
            venues.map((venue: any) => {
              //console.log(venue);
              return <CustomMarker key={venue.id} venue={venue} />;
            })}
        </MapContainer>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default Map;
