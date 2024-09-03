import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface coordinates {
  latitude: number;
  longitude: number;
}

const Map: React.FC<coordinates> = ({ latitude, longitude }: coordinates) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBi_ewIoohQRPME0aKqio1k4qAFyeSkNsw",
  });

  const position = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={10}
        >
          <></>
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
