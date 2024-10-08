import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
                    <div className="d-flex align-items-center gap-3">
                        <IconButton size="large" edge="end" color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                            <Sidebar />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
