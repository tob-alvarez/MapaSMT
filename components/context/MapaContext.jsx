/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const MapaContext = createContext();

// eslint-disable-next-line react/prop-types
const ProviderMapa = ({ children }) => {

    const [puntosMapa, setPuntosMapa] = useState([]);

    return (
        <MapaContext.Provider
            value={{
                puntosMapa
            }}
        >
            {children}
        </MapaContext.Provider>
    );
};

export default ProviderMapa;
