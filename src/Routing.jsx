import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Main from "./components/Main";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;
