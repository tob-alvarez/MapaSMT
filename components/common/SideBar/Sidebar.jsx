import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Collapse, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Switch from '../../Swtichs/Switch';
import { MapaContext } from "../../context/MapaContext";
import { useContext, useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ListaPrueba() {
    const [state, setState] = useState({ left: false });
    const [openMenu, setOpenMenu] = useState({}); // Estado para controlar qué menú está abierto
    const [selectedSwitch, setSelectedSwitch] = useState("Municipalidad"); // El "Switch" seleccionado por defecto
    const { traerMenu, menu } = useContext(MapaContext);

    useEffect(() => {
        traerMenu();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleDrawer = (open) => {
        setState({ left: open });
    };

    const handleToggle = (idOpcion) => {
        setOpenMenu((prev) => ({
            ...prev,
            [idOpcion]: !prev[idOpcion] // Cambiar el estado de abierto/cerrado para cada opción
        }));
    };

    // Función para manejar el cambio de estado de los switches
    const handleSwitchChange = (label) => {
        setSelectedSwitch(label); // Cambia el estado del Switch seleccionado
    };

    const list = () => (
        <Box sx={{ width: 280 }} role="presentation" className="d-flex justify-content-between flex-column h-100">
            <div className="d-flex flex-column justify-content-center align-items-start mt-5">
                <List component="nav" aria-labelledby="nested-list-subheader" className="w-100">
                    {/* Switch inicial de Municipalidad */}
                    <ListItemButton component="a" className="w-100" onChange={() => handleSwitchChange("Municipalidad")}>
                        <Switch
                            label={'Municipalidad'}
                            checked={selectedSwitch === "Municipalidad"}
                        />
                    </ListItemButton>

                    {menu.map((item) => (
                        <div key={item.idOpcion}>
                            {/* Elemento principal del menú */}
                            <ListItemButton onClick={() => handleToggle(item.idOpcion)} className="w-100">
                                <ListItemText primary={item.nombre_opcion} />
                                {openMenu[item.idOpcion] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            {/* Subopciones, colapsan al hacer clic */}
                            <Collapse in={openMenu[item.idOpcion]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }} onChange={() => handleSwitchChange(item.nombre_subopcion)}>
                                        <ListItemText primary={item.nombre_subopcion} />
                                        {/* Switch para la subopción */}
                                        <Switch
                                            checked={selectedSwitch === item.nombre_subopcion}
                                        />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>
                    ))}
                </List>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="footer text-center">
                    Desarrollado por Dirección de Innovación Tecnológica
                    <span style={{ fontSize: ".4em", verticalAlign: "-0.1em" }}>©</span> 2024
                </p>
            </div>
        </Box>
    );

    return (
        <div>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => toggleDrawer(true)}>
                <TuneIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={state.left}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}
