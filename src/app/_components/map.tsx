import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { getAllVenues } from "@/queries";
import { latLng, LatLngExpression, LatLngTuple, PointTuple } from "leaflet";

const CustomMarker = ({
  venue,
}: {
  venue: {
    name: string;
    address: string;
    description: string;
    coordinates: number[];
  };
}) => {
  return (
    <Marker position={latLng(venue.coordinates[0], venue.coordinates[1])}>
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
  console.log(venues);
  return (
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
        venues.map((venue) => {
          console.log(venue);
          return <CustomMarker key={venue.id} venue={venue} />;
        })}
    </MapContainer>
  );
}

export default Map;
