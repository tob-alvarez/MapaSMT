import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Switch from '../../Swtichs/Switch'
// import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function ListaPrueba() {
    const [state, setState] = React.useState({
        left: false,
    });
    //   const [openList, setOpenList] = React.useState(null); // Estado para controlar qué lista está abierta

    //   const handleClick = (label) => {
    //     // Si el label ya está abierto, ciérralo; de lo contrario, abre el nuevo y cierra el anterior
    //     setOpenList(openList === label ? null : label);
    //   };

    const toggleDrawer = (open) => {
        setState({ left: open });
    };

    const list = () => (
        <Box
            sx={{ width: 280, }}
            role="presentation"
            className="d-flex justify-content-between flex-column h-100"
        >
            <div className="d-flex flex-column justify-content-center align-items-start mt-5">
                {/* Inicio */}
                <ListItemButton component="a" className="w-100">
                    <Switch label={'Municipalidad'} checked={true}/>
                </ListItemButton>
                {/* Construye cada elemento del menú */}
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
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => toggleDrawer(true)}
            >
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
