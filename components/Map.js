import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 34.7324017560646,
  lng: 135.64916336516146,
};

const config = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey={config}
      version="weekly"
      region="JP"
      language="ja">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          disableDefaultUI: true,
        }}>
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
