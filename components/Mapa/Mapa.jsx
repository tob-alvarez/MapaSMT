// src/App.js
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import limites from '../../limites.json'
import Card from '../common/Card/Card'
import { useContext, useEffect, useState } from 'react';
import { MapaContext } from '../context/MapaContext';
// import logoMuni from '../../src/assets/logo-SMT-Blanco.png'
// import L from 'leaflet';

const municipioLimites = limites;

function Mapa() {
    const { subOpcionSeleccionada, traerUbicaciones, puntosMapa } = useContext(MapaContext);
    const [filteredPuntos, setFilteredPuntos] = useState([]);
    const estiloLimite = {
        color: '#3388ff',  // Color de las líneas
        weight: 4,         // Grosor de las líneas
        fill: false        // Desactiva el relleno
    };

    useEffect(() => {
        traerUbicaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Filtrar puntos cuando cambia subOpcionSeleccionada
        if (subOpcionSeleccionada) {
            const puntosFiltrados = puntosMapa.filter(punto => punto.idSubopcion === subOpcionSeleccionada);
            setFilteredPuntos(puntosFiltrados);
        } else {
            setFilteredPuntos(puntosMapa);
        }
    }, [subOpcionSeleccionada, puntosMapa]);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '100%', }}>
                <MapContainer center={[-26.842, -65.253]} zoom={13} zoomControl={false} style={{ height: "92vh" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={municipioLimites} style={estiloLimite} />
                    {filteredPuntos.map(p => (
                        <Marker position={[p.lat, p.lon]}
                            key={p.idUbicacion}
                        >
                            <Popup>
                                <Card punto={p} />
                            </Popup>
                        </Marker>
                    ))}

                </MapContainer>
            </div>
        </div>
    );
}

export default Mapa;
