"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { MarkerCluster } from "leaflet";
import { icon, latLng } from "leaflet";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { getAllVenuesAction } from "@/lib/actions";

const myIcon = icon({
  iconUrl: "/map-pin-svgrepo-com.svg",
  iconRetinaUrl: "/map-pin-svgrepo-com.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return L.divIcon({
    html: `<div style="display: flex; align-items: center; justify-content: center; background-color: #E11D48; border-radius: 100%; width: 32px; height: 32px; color: white; font-weight: 600; font-size: 16px;">${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: L.point(32, 32, true),
  });
};

const CustomMarker = ({
  venue,
}: {
  venue: {
    name: string;
    address: string;
    description: string;
    longitude: string;
    latitude: string;
    updatedAt: Date;
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Marker
      icon={myIcon}
      position={latLng(parseFloat(venue.longitude), parseFloat(venue.latitude))}
      eventHandlers={{
        click: (e) => {
          setIsOpen(true);
        },
      }}
    >
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="max-w-lg mx-auto">
          <DrawerHeader>
            <DrawerTitle>{venue.name}</DrawerTitle>
            <DrawerDescription>Address: {venue.address}</DrawerDescription>
            {venue.updatedAt && (
              <DrawerDescription>
                Updated at: {venue.updatedAt.toLocaleString()}
              </DrawerDescription>
            )}
          </DrawerHeader>
          <DrawerFooter>
            <p>{venue.description}</p>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Marker>
  );
};

export async function Map() {
  const [venues, setVenues] = useState<any>(null);
  useEffect(() => {
    getAllVenuesAction().then((fetchedVenues) => {
      setVenues(fetchedVenues);
    });
  }, []);
  return (
    <>
      {venues ? (
        <MapContainer
          center={[59.8512197, 17.6620915]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%", zIndex: "10" }}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
          />
          <MarkerClusterGroup
            polygonOptions={{ fillColor: "#ffffff00", color: "#f0080000" }}
            iconCreateFunction={createClusterCustomIcon}
          >
            {venues &&
              venues.map((venue: any) => {
                return <CustomMarker key={venue.id} venue={venue} />;
              })}
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default Map;
