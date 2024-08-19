import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import '@fontsource/be-vietnam-pro';
import bg2 from './Assets/bg2.jpg';
import helpImage from './Assets/help.gif';
import './styles.css';
import lerepImage from './Assets/lerep.jpg';
import ungaranImage from './Assets/ungaran.jpg';
import kalonganImage from './Assets/kalongan.jpg';
import leyanganImage from './Assets/leyangan.jpg';
import bawenImage from './Assets/bawen.jpg';

const cards = [
  {
    name: "Puskesmas Lerep",
    description: "Hotline: 0246923416",
    additionalText: "Jam Operasional: 07.30-12.00",
    footer: (
      <a 
        href="https://maps.app.goo.gl/ZNY5EDkfTZSmYGqCA" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Alamat: Jl. Yudistira Raya KM.3, Kec. Ungaran Barat, Kab. Semarang
      </a>
    ),
    more: "Puskesmas Lerep adalah pusat kesehatan masyarakat yang terletak di Kecamatan Ungaran Barat, Kabupaten Semarang, Indonesia.",
    imageUrl: lerepImage,
  },
  {
    name: "Puskesmas Ungaran",
    description: "Hotline: 082225650665",
    additionalText: "Jam Operasional: 08.00-12.00",
    footer: (
      <a 
        href="https://maps.app.goo.gl/67tBkMVi4aZcsqiv5" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Alamat: Jl. Jend Achmad Yani No.3, Kec. Ungaran Barat, Kab. Semarang
      </a>
    ),
    more: "Puskesmas Ungaran adalah pusat kesehatan masyarakat yang terletak di Kecamatan Ungaran Barat, Kabupaten Semarang, Indonesia. ",
    imageUrl: ungaranImage,
  },
  {
    name: "Puskesmas Kalongan",
    description: "Hotline: 02476902771",
    additionalText: "Jam Operasional: 08.00-11.00",
    footer: (
      <a 
        href="https://maps.app.goo.gl/5rp8t9Q1pc1muX8j6" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Alamat: Jl. Arjuna No.2, Kec. Ungaran Timur, Kab. Semarang
      </a>
    ),
    more: "Puskesmas Kalongan adalah pusat kesehatan masyarakat yang terletak di Kecamatan Ungaran Timur, Kabupaten Semarang, Indonesia.",
    imageUrl: kalonganImage,
  },
  {
    name: "Puskesmas Leyangan",
    description: "Hotline: 02476903140",
    additionalText: "Jam Operasional: 08.00-12.00",
    footer: (
      <a 
        href="https://maps.app.goo.gl/XCCB4ZMa1dxrNTJR9" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Alamat: Jl. Puskesmas No.1, Kec. Ungaran Timur, Kab. Semarang
      </a>
    ),
    more: "Puskesmas Leyangan adalah pusat kesehatan masyarakat yang terletak di Kecamatan Ungaran Timur, Kabupaten Semarang, Indonesia.",
    imageUrl: leyanganImage,
  },
  {
    name: "Puskesmas Bawen",
    description: "Hotline: 082326157206",
    additionalText: "Jam Operasional: 07.30-12.00",
    footer: (
      <a 
        href="https://maps.app.goo.gl/kfGH9Dn1k7bSgcLLA" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Alamat: Jl. Palagan No.60, Kec. Ambarawa, Kab. Semarang
      </a>
    ),
    more: "Puskesmas Bawen adalah pusat kesehatan masyarakat yang terletak di Kecamatan Bawen, Kabupaten Semarang, Indonesia.",
    imageUrl: bawenImage,
  },
];

const Card1 = () => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <label key={card.name} id={card.name}>
          <input type="checkbox" />
          <div className="card">
            <div className="front">
              <header>
                <h2>{card.name}</h2>
              </header>
              <img src={card.imageUrl} alt={card.name} style={{ width: '55%', height: 'auto', marginBottom: '1rem' }} />
              <h3>{card.description}</h3>
              <p>{card.additionalText}</p> 
              <h4>{card.footer}</h4>
            </div>
            <div className="back">
              <header>
                <h2>{card.name}</h2>
              </header>
              <p>{card.more}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

function Layanan() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'left', 
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="h4" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', fontWeight: 'bold' }}>
          LAYANAN
        </Typography>
        <img src={helpImage} alt="Example" style={{ marginLeft: '1rem', height: '80px' }} />
      </Box>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Konsultasi Gizi dan Layanan BPJS
      </Typography>
      <Card1 />
    </div>
  );
}

export default Layanan;
