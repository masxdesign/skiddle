import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const InteractiveMap = ({ position, height = 300, markerText }) => (
    <MapContainer style={{ height }} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                {markerText}
            </Popup>
        </Marker>
    </MapContainer>
)

export default InteractiveMap