// src/App.js
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import limites from '../../limites.json'
import Card from '../common/Card/Card'
import logoMuni from '../../src/assets/logo-SMT-Blanco.png'
import L from 'leaflet';

const municipioLimites = limites;

function Mapa() {

    const estiloLimite = {
        color: '#3388ff',  // Color de las líneas
        weight: 4,         // Grosor de las líneas
        fill: false        // Desactiva el relleno
    };

    let myIcon = L.icon({
        iconUrl: logoMuni,
        iconSize: [50, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '100%',  }}>
                <MapContainer center={[-26.842, -65.253]} zoom={13} zoomControl={false} style={{ height: "92vh" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={municipioLimites} style={estiloLimite} />
                    {/* {puntosFiltrados.map(p => ( */}
                    <Marker position={[-26.838674294694695, -65.20657286071895]} icon={myIcon} >
                        <Popup>
                            <Card />
                        </Popup>
                    </Marker>
                {/* ))} */}
                </MapContainer>
            </div>
        </div>
    );
}

export default Mapa;
