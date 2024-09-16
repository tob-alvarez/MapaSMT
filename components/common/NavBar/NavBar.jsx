import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import logoMuni from "../../../src/assets/Logo_SMT_neg_4.png";
import "./Navbar.css";
import Sidebar from '../SideBar/Sidebar'

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1f89f6" }}>
                <Toolbar className="d-flex justify-content-around align-items-center w-100">
                    <div className="d-flex align-items-center">
                        <img src={logoMuni} alt="Logo Municipio" className="logoMuni2" style={{ height: "40px", marginRight: "10px" }} />
                    </div>
                    {/* <Typography
                        variant="p"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "white",
                            letterSpacing: "1px",
                        }}
                    >
                        MAPA INTERACTIVO
                    </Typography> */}
                    <div className="d-flex align-items-center">
                        <IconButton size="large" edge="end" color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <IconButton size="large" edge="end" color="inherit" aria-label="filter" sx={{ marginLeft: "10px" }}>
                            <Sidebar />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
