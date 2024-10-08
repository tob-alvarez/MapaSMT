/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import axios from "../../config/axios";

export const MapaContext = createContext();

// eslint-disable-next-line react/prop-types
const ProviderMapa = ({ children }) => {

    const [puntosMapa, setPuntosMapa] = useState([]);
    const [menu, setMenu] = useState([]);

    const traerMenu = async () => {
        try {
            const resultado = await axios.get("/mapa/menu");
            setMenu(resultado.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MapaContext.Provider
            value={{
                puntosMapa,
                menu,
                traerMenu
            }}
        >
            {children}
        </MapaContext.Provider>
    );
};

export default ProviderMapa;
