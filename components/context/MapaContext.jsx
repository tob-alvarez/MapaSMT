import { createContext, useState } from "react";
import axios from "../../config/axios";

export const MapaContext = createContext();

// eslint-disable-next-line react/prop-types
const ProviderMapa = ({ children }) => {
    const [subOpcionSeleccionada, setSubOpcionSeleccionada] = useState(1);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [puntosMapa, setPuntosMapa] = useState([]);
    const [menu, setMenu] = useState([]);

    const getAuth = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return setAuthenticated(false);
            }
            setAuthenticated(true)
        } catch (error) {
            setAuthenticated(false)
            localStorage.removeItem("token");
            console.log("error de auth");
            console.log(error)
        }
        setLoading(false)
    }

    const traerMenu = async () => {
        try {
            const resultado = await axios.get("/mapa/menu");
            setMenu(resultado.data);
        } catch (error) {
            console.log(error);
        }
    };

    const traerUbicaciones = async () => {
        try {
            const resultado = await axios.get("/mapa/ubicaciones");
            setPuntosMapa(resultado.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MapaContext.Provider
            value={{
                puntosMapa,
                menu,
                traerMenu,
                subOpcionSeleccionada,
                setSubOpcionSeleccionada,
                traerUbicaciones,
                getAuth,
                loading,
                authenticated
            }}
        >
            {children}
        </MapaContext.Provider>
    );
};

export default ProviderMapa;
