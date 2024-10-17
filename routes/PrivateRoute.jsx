/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { MapaContext } from "../components/context/MapaContext";

const PrivateRoute = ({ children }) => {
    const { getAuth, authenticated, loading } = useContext(MapaContext);

    useEffect(() => {
        getAuth();
    }, []);

    return loading ? (
        <div>Cargando</div>
    ) : authenticated ? (
        children
    ) : (
        <Navigate to="/*" />
    );
};

export default PrivateRoute;