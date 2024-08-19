import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// MUI imports
import { Button, Typography, AppBar, Toolbar, CssBaseline, Card, CardContent } from "@mui/material";
import '@fontsource/be-vietnam-pro';

// Components
import Header from "./Header";

import backgroundImage from './Assets/bgvid3.gif';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div style={{ 
      position: "relative", 
      minHeight: "100vh", 
      paddingBottom: "100px", 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingBottom: '30rem',
      height: "160vh",
      boxSizing: 'border-box',
    }}>
      <div style={{ 
        position: "absolute", 
        top: "28%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        zIndex: 100, 
        textAlign: "left" 
      }}>
          <Card sx={{ 
            padding: "2rem", 
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            borderRadius: "15px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem' }}>
              <strong>SELAMAT DATANG DI WEBGIS GESIT KABUPATEN SEMARANG!</strong>
              </Typography>
              <Link to="/pencegahan-stunting" style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{
                  fontSize: "1.1rem",
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: 'Be Vietnam Pro',
                  "&:hover": {
                    backgroundColor: "yellow",
                  }
                }}>
                  EKSPLOR INFORMASI PENCEGAHAN STUNTING
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <div style={{ 
          position: "absolute", 
          top: 'calc(60% + 10px)',
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 100,
          width: "auto",
          textAlign: "center",
          marginTop: '130px'
        }}>
          <Card sx={{ 
            padding: "1rem", 
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            borderRadius: "15px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            display: "inline-block"
          }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: 'Be Vietnam Pro', fontWeight: 'bold', marginBottom: '1rem' }}>
                Jumlah Pengunjung WebGIS
              </Typography>
              <div 
                className="elfsight-app-00b70aa6-884b-458d-a9b7-0aab1f2e59ba" 
                data-elfsight-app-lazy 
                style={{ 
                  width: '100%',
                  height: '100%',
                }}>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Footer section */}
      <footer style={{ position: "bottom", bottom: 0, width: "100%", backgroundColor: "black", padding: "20px", textAlign: "center" }}>
      </footer>
    </>
  );
}

export default Home;
