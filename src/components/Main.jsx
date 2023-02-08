import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./Main.css";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="img">
        <img
          src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"
          alt="pictur"
          className="img-fluid mx-auto d-block"
        />
        <h1 className="d-flex justify-content-center mt-2" id="nameText">
          <b>Hi, I am Brooke</b>
        </h1>
        <div className="d-flex justify-content-center pt-2 pb-3">
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                My resume
              </Link>
              <Link
                underline="hover"
                color="inherit"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Link>
              <Link underline="hover" color="inherit" href="/">
                About
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-5" id="mainBtn">
          <Button endIcon={<SendIcon />} id="mailBtn">
            <a href="mailto:balmeetsingh44@gmail.com" id="mailText">
              Email Me
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Main;
