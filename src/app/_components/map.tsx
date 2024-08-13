import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { getAllVenues } from "@/queries";

const CustomMarker = ({
  venue,
}: {
  venue: {
    name: string;
    address: string;
    description: string;
    location: number[];
  };
}) => {
  return (
    <Marker position={[59.8512197, 17.6620915]}>
      <Popup>
        <p> {venue.name}</p>
        <p> {venue.address}</p>
        <p> {venue.description}</p>
      </Popup>
    </Marker>
  );
};

export async function Map() {
  const venues = await getAllVenues();
  return (
    <MapContainer
      center={[59.8512197, 17.6620915]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {venues &&
        venues.map((venue) => {
          return <CustomMarker key={venue.id} venue={venue} />;
        })}
    </MapContainer>
  );
}

export default Map;
