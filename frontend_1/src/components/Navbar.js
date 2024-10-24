import React, { useState } from "react";
import { Link ,useLocation} from "react-router-dom"; 
import Logo from "../Assets/bglogo.png";
import "./Navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search input
  const location = useLocation();

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Projects", icon: <InfoIcon />, path: "/projectsall" },
    { text: "All Services", icon: <InfoIcon />, path: "/servicesall" },  // Add this line
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Add functionality for searching based on input
  };
  const isAllProjectsPage = location.pathname.startsWith("/projects");
  const isAllServicesPage = location.pathname.startsWith("/services");


  return (
    
    <nav className={`navbar ${isAllProjectsPage || isAllServicesPage? 'white-navbar' : ''}`} style={{ position: "absolute", width: "100%", zIndex: 100 }}>
      
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: "250px", height: "100px" }} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="navbar-search-container">
        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="navbar-links-container">
        <Link to="/projectsall">Projects</Link>
        <Link to="/servicesall">Services</Link>
        <Link to="/signin">Sign In</Link>
        <button className="navbut">Become a Tasker</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
