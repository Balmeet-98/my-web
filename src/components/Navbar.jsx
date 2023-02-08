import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar d-flex justify-content-between">
        <span className="navbar-brand h1 ps-3 pt-1">Navbar</span>
        <Button id="homeBtn" onClick={() => navigate("/")}>
          Home
          <HomeIcon />
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
