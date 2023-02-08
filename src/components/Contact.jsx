import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Contact.css";
const Contact = () => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  return (
    <>
      <div class="card m-5 p-3" id="contactMain">
        <div class="card-body " id="contactBody">
          <h5 class="card-title d-flex justify-content-center mt-3 mb-5">
            Let's Talk
          </h5>
          <form>
            <div class="row mb-3">
              <label for="inputName" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="messageText" class="col-sm-2 col-form-label">
                Message
              </label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="messageText"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-5">
              <Button
                endIcon={<SendIcon />}
                id="mailBtn"
                onClick={() => setopen(true)}
              >
                abc
              </Button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style} id="boxStyle">
                  <h4>Submitted successfully</h4>
                </Box>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
