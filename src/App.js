import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

//MUI imports
import {StyledEngineProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Peta from "./components/Peta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApaItuStunting from "./components/Apaitustunting";
import Layanan from "./components/Layanan";
import Feedback from "./components/Feedback";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pencegahan-stunting" element={<ApaItuStunting />} />
          <Route path="/peta" element={<Peta />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;