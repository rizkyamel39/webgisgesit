import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography, Card, Grid, Box, FormControlLabel, Checkbox, CardContent, CardMedia } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl, Feature  } from 'react-leaflet';
import '@fontsource/be-vietnam-pro';
import Header from "./Header";
import bg2 from './Assets/bg2.jpg';
import bgcardImage from './Assets/bgcard.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { PieChart } from '@mui/x-charts/PieChart';
import mapImage from './Assets/map.gif';
import statisImage from './Assets/statis.gif';
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder";
import './leaflet-custom.css';
import shp from 'shpjs';
import omnivore from 'leaflet-omnivore';
import hotspotData2019 from './Assets/hotspot_2019.js';
import hotspotData2020 from './Assets/hotspot_2020.js';
import hotspotData2021 from './Assets/hotspot_2021.js';
import hotspotData2022 from './Assets/hotspot_2022.js';
import hotspotData2023 from './Assets/hotspot_2023.js';
import kabsemarang from './Assets/kab_semarang.js';
import faskes1 from './Assets/faskes1.jpg';
import faskes2 from './Assets/faskes2.jpg';
import faskes3 from './Assets/faskes3.jpg';
import faskes4 from './Assets/faskes4.jpg';
import faskes5 from './Assets/faskes5.jpg';
import faskes6 from './Assets/faskes6.jpg';
import faskes7 from './Assets/faskes7.jpg';
import faskes8 from './Assets/faskes8.jpg';
import faskes9 from './Assets/faskes9.jpg';
import faskes10 from './Assets/faskes10.jpg';
import faskes11 from './Assets/faskes11.jpg';
import faskes12 from './Assets/faskes12.jpg';
import faskes13 from './Assets/faskes13.jpg';
import faskes14 from './Assets/faskes14.jpg';
import faskes15 from './Assets/faskes15.jpg';
import faskes16 from './Assets/faskes16.jpg';
import faskes17 from './Assets/faskes17.jpg';
import faskes18 from './Assets/faskes18.jpg';
import faskes19 from './Assets/faskes19.jpg';
import faskes20 from './Assets/faskes20.jpg';
import faskes21 from './Assets/faskes21.jpg';
import faskes22 from './Assets/faskes22.jpg';
import faskes23 from './Assets/faskes23.jpg';
import faskes24 from './Assets/faskes24.jpg';
import faskes25 from './Assets/faskes25.jpg';
import faskes26 from './Assets/faskes26.jpg';
import faskes27 from './Assets/faskes27.jpg';
import faskes28 from './Assets/faskes28.jpg';
import faskes29 from './Assets/faskes29.jpg';
import faskes30 from './Assets/faskes30.jpg';
import faskes31 from './Assets/faskes31.jpg';
import faskes32 from './Assets/faskes32.jpg';
import faskes33 from './Assets/faskes33.jpg';
import faskes34 from './Assets/faskes34.jpg';
import faskes35 from './Assets/faskes35.jpg';
import iconfaskes from './Assets/iconfaskes.png';

// Importing the marker icon images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


// Data for the bar chart
const dataset = [
  { ungaranbarat: 325, ungarantimur: 197, bawen: 106, year: '2019' },
  { ungaranbarat: 311, ungarantimur: 388, bawen: 122, year: '2020' },
  { ungaranbarat: 237, ungarantimur: 198, bawen: 179, year: '2021' },
  { ungaranbarat: 251, ungarantimur: 247, bawen: 128, year: '2022' },
  { ungaranbarat: 134, ungarantimur: 94, bawen: 83, year: '2023' },
];


// Data for the pie chart
const pieData = [
  { id: 0, value: 14, label: 'Kec. Ungaran Barat' },
  { id: 1, value: 10, label: 'Kec. Ungaran Timur' },
  { id: 2, value: 5, label: 'Kec. Bawen' },
];


// Fixing the default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function PieActiveArc() {
  return (
    <Box sx={{ position: 'relative', width: '120%', height: '400px', overflow: 'visible',
      // Add margin-bottom to create space between pie chart and footer
      marginBottom: '90px',
      // Apply specific margin for mobile devices
      '@media (max-width: 600px)': {
        marginBottom: '90px', // Increase the margin on smaller screens
      },
    }}
  >
      <PieChart
        series={[
          {
            data: pieData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 0.5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 270,
          },
        ]}
        width={450}
        height={400}
        margin={{ top: 50, bottom: 50, left: 50, right: 180 }}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'middle', horizontal: 'right' },
            padding: 4,
          },
        }}
      >
        <text
          x={200}
          y={30}
          textAnchor="middle"
          dominantBaseline="hanging"
          fontSize="16"
          fontWeight="bold"
        >
          Jumlah Faskes Kab. Semarang
        </text>
      </PieChart>
    </Box>
  );
}

const getColorByClassification = (classification) => {
  switch (classification) {
    case "Sangat Tinggi":
      return "#ff0000"; 
    case "Tinggi":
      return "#ff8000"; 
    case "Sedang":
      return "#ffff00"; 
    case "Rendah":
      return "#00ff00";
  }
};

const faskesIcon = new L.Icon({
  iconUrl: iconfaskes,
  iconSize: [25, 25],  // Adjust size as needed
  iconAnchor: [12, 25],
  popupAnchor: [0, -25]
});

// Updated onEachFeature to handle undefined properties
const onEachFeature = (feature, layer) => {
  // Ensure feature and feature.properties are defined
  const { properties } = feature || {};
  const { classification, name, image, description } = properties || {};

  let popupContent = '';

  if (name) {
    popupContent = `
      <div style="width: 150px; text-align: center;">
        <h3>${name}</h3>
        <img src="${image}" alt="${name}" style="display: block; margin: 10px auto; width: 100px; height: 100px;" />
        <p>${description}</p>
      </div>
    `;
  } else if (classification) {
    popupContent = `Classification: ${classification}`;
  }

  if (popupContent) {
    layer.bindPopup(popupContent);
  }

  if (feature.properties && feature.properties.name) {
    layer.setIcon(faskesIcon);
  }
};

// Updated geoJsonStyle to handle undefined properties
const geoJsonStyle = (feature) => {
  const { properties } = feature || {};
  const classification = properties?.classification;

  return {
    fillColor: getColorByClassification(classification),
    weight: 2,
    opacity: 1,
    color: "black",
    dashArray: "3",
    fillOpacity: 0.7,
  };
};



function GoogleLayers() {
  const [activeBaseLayer, setActiveBaseLayer] = useState('Google Streets');

  const handleBaseLayerChange = (e) => {
    setActiveBaseLayer(e.target.name);
  };

  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer
        checked={activeBaseLayer === 'Google Streets'}
        name="Google Streets"
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer
        checked={activeBaseLayer === 'Google Satellite'}
        name="Google Satellite"
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Fasilitas Kesehatan">
        <GeoJSON data={faskes} onEachFeature={onEachFeature} pointToLayer={(feature, latlng) => {
      return L.marker(latlng, { icon: faskesIcon });
    }} />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hotspot 2019">
        <GeoJSON
          data={hotspotData2019}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hotspot 2020">
        <GeoJSON
          data={hotspotData2020}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hotspot 2021">
        <GeoJSON
          data={hotspotData2021}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hotspot 2022">
        <GeoJSON
          data={hotspotData2022}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hotspot 2023">
        <GeoJSON
          data={hotspotData2023}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Batas Administrasi Kabupaten Semarang">
        <GeoJSON
          data={kabsemarang}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
    </LayersControl>
  );
}


const faskes = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44139, -7.20667] }, properties: { image: faskes1, name: "Klinik dr. Christi Istiarti", description: "Jl. Moh. Yamin No.101, Kuncen, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45011, -7.20487] }, properties: { image: faskes2, name: "Klinik Medika Polres", description: "Dliwang, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45135, -7.20523] }, properties: { image: faskes3, name: "Klinik dr. Setya Pinardi", description: "Jl. MT. Hariyono No.44, Dliwang, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44659, -7.20482] }, properties: { image: faskes4, name: "Klinik Gracia", description: "Jl. Mayjen. Sutoyo No.9, Dliwang, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44799, -7.20367] }, properties: { image: faskes5, name: "Klinik Angela Nugraha", description: "Jl. Diponegoro No.213, Genuk Barat, Genuk, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44694, -7.20418] }, properties: { image: faskes6, name: "Klinik Sayang Anak", description: "Jl. Surabaya No.100, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45602, -7.19964] }, properties: { image: faskes7, name: "Klinik Nayaka Husada 06", description: "Jl. Kertanegara No.17, Kaliaang, Langensari, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.46204, -7.20045] }, properties: { image: faskes8, name: "Klinik Sofia Medika", description: "Jl. Tentara Pelajar, RW.11, Watububan, Gedanganak, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45170, -7.20236] }, properties: { image: faskes9, name: "Klinik Niki Helti", description: "Jalan Raya Merdeka RT.03/RW.04 Lingkungan Lewono, Prampatan, Beji, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.46307, -7.20311] }, properties: { image: faskes10, name: "Klinik Primadenta", description: "Jl. Pelita Raya, Mijen, Gedanganak, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44799, -7.20587] }, properties: { image: faskes11, name: "Klinik Merah Putih", description: "Jl. Halmahera Raya No.RT007, Watububan, RW001, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45175, -7.19464] }, properties: { image: faskes12, name: "Klinik Promedika", description: "Jl. MT. Hariyono, Sidosari, Lerep, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45489, -7.20595] }, properties: { image: faskes13, name: "Klinik Sidosari", description: "Jl. MT. Hariyono, Sidosari, Sidomulyo, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.47439, -7.19342] }, properties: { image: faskes14, name: "Klinik Rizky Putri Husada", description: "RT.05/RW.02, Karangjoho, Samban, Kec. Bawen, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.47546, -7.19091] }, properties: { image: faskes15, name: "Klinik Larizma Husada", description: "Jalan Raya Semarang-Bawen, Km. 32, Bawen., Harjosari, Kec. Bawen, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45006, -7.20513] }, properties: { image: faskes16, name: "Klinik dr. Rochip Mursidi", description: "Gang Mawar No. 19 Ngemplak, Rt 3/01 Bawen, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44169, -7.20666] }, properties: { image: faskes17, name: "Puskesmas Ungaran", description: "Jl. A. Yani N. 3, Dliwang, Ungaran, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.47368, -7.20263] }, properties: { image: faskes18, name: "Puskesmas Lerep", description: "Jl. Yudistira Raya No.KM 3, Mapagan, Lerep, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.49139, -7.20589] }, properties: { image: faskes19, name: "Puskesmas Leyangan", description: "Jetis Tiga, Leyangan, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.47596, -7.19016] }, properties: { image: faskes20, name: "Puskesmas Kalongan", description: "Jl. Gatotkaca, Kejangan, Kalongan, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44686, -7.20478] }, properties: { image: faskes21, name: "RS. At-Tin", description: "Jalan Slamet Riyadi, Bawen, Kec. Bawen, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.46199, -7.20322] }, properties: { image: faskes22, name: "RSUD dr. Gondo Suwarno", description: "Jl. Diponegoro No.125, Ungaran, Genuk, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45754, -7.20024] }, properties: { image: faskes23, name: "RSU Kusuma Ungaran", description: "Jl. Letjend Suprapto No.62, Paren, Sidomulyo, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44608, -7.18835] }, properties: { image: faskes24, name: "Apotek Enggal Saras", description: "Jl. Kalimosodo, Kluwihan, Sidomukti, Bandungan, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.46322, -7.19487] }, properties: { image: faskes25, name: "Apotek Sidowaras III", description: "Jl. Pemuda No.36, Temanggungan, Panjang, Kec. Ambarawa, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44695, -7.20499] }, properties: { image: faskes26, name: "Apotek RS Ken Saras", description: "Jl. Soekarno Hatta No.km.29, Kebonan, Randugunting, Kec. Bergas, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44847, -7.20586] }, properties: { image: faskes27, name: "Apotek Kimia Farma 203 Ungaran", description: "Jl. Diponegoro No.212, Ungaran, Genuk, Kec. Ungaran Bar., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45669, -7.18712] }, properties: { image: faskes28, name: "Apotek Klinik Utama Satria Meditama", description: "Jl. Kapuas I No.10, Sidomulyo, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.50618, -7.19876] }, properties: { image: faskes29, name: "Apotek Klinik Utama Sari Medika", description: "Jl. jendral sudirman no.38 kupangpete, Pete, Kupang, Kec. Ambarawa, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44174, -7.18754] }, properties: { image: faskes30, name: "Apotek Balongsari Sehat", description: "Jl. Harjuna Raya, RT.08/RW.03, Ubinan, Balongsari, Kec. Pringapus, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45205, -7.20417] }, properties: { image: faskes31, name: "Apotek Balkesmas Ambarawa", description: "Jl. Dr. Cipto No.102, Kepatihan, Kranggan, Kec. Ambarawa, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.47553, -7.19003] }, properties: { image: faskes32, name: "Apotek RSU Kusuma Ungaran", description: "Jl. Letjend Suprapto No.62, Paren, Sidomulyo, Kec. Ungaran Tim., Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44849, -7.20478] }, properties: { image: faskes33, name: "Apotek RS At-Tin", description: "Jalan Slamet Riyadi, Bawen, Kec. Bawen, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.45156, -7.18691] }, properties: { image: faskes34, name: "Apotek RSUD dr. Gunawan Mangunkusumo", description: "Jalan R.A. Kartini No. 101 Tambakboyo, Losari, Lodoyong, Kec. Ambarawa, Kabupaten Semarang",},},
    { type: "Feature", geometry: { type: "Point", coordinates: [110.44045, -7.18586] }, properties: { image: faskes35, name: "Apotek RSU Bina Kasih Ambarawa", description: "Jl. Naryoatmajan No.27A, Kranggan, Panjang, Kec. Ambarawa, Kabupaten Semarang",},},
  ],
};


function ShapefileLayer({ url }) {
  const map = useMap();
  
  useEffect(() => {
    let layerGroup = null;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const data = await shp(arrayBuffer);
        
        layerGroup = L.layerGroup();
        
        L.geoJSON(data, {
          style: (feature) => {
            return {
              fillColor: feature.properties.color || '#ff7800',
              weight: 1,
              opacity: 1,
              color: 'white',
              fillOpacity: 0.7
            };
          },
          onEachFeature: (feature, layer) => {
            if (feature.properties) {
              layer.bindPopup(Object.keys(feature.properties).map(key => 
                `${key}: ${feature.properties[key]}`
              ).join('<br />'));
            }
          }
        }).addTo(layerGroup);

        layerGroup.addTo(map);
      } catch (error) {
        console.error('Error loading shapefile:', error);
      }
    };

    fetchData();

    return () => {
      if (layerGroup) {
        map.removeLayer(layerGroup);
      }
    };
  }, [map, url]);

  return null;
}

function Peta() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = true;
    document.body.appendChild(script);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);


    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div style={{
      padding: '2rem',
      textAlign: 'left',
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '310vh',
      boxSizing: 'border-box',
      paddingBottom: '127rem'
    }}>
      <Box display="flex" alignItems="center" mb={1}>
      <Typography variant="h4" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', fontWeight: 'bold' }}>
        PETA
      </Typography>
      <img src={mapImage} alt="Example" style={{ marginLeft: '1rem', height: '80px' }} />
      </Box>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Peta Kasus Anak Stunting
      </Typography>
      <MapContainer center={[-7.20667, 110.44139]} zoom={10} scrollWheelZoom={true} style={{ height: '700px', width: '100%' }}>
      <GoogleLayers />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.7rem', fontWeight: 'bold' }}>
        Peta Lainnya
      </Typography>
      <Card sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        marginBottom: '2rem', 
        backgroundImage: `url(${bgcardImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={7}>
          <CardContent sx={{ paddingLeft: '2rem' }}>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/1RQrL1xhiUji9xZFmAu4bK9Wdah8olN2D/view?usp=sharing" target="_blank" rel="noopener noreferrer">Peta Buffer Rumah Sakit</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/152hp9cqQW5EFc7tF4Te56Eeboi3cG1Ty/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Buffer Klinik</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/1CcjtBjsF5ZT5tOgC3gQSqVBcHOspCOy2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Buffer Puskesmas</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/1FOYkzCJMeAILV7f1qjXsWSY6IPEsUq5Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Thiessen Polygon Rumah Sakit</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/1yB_XCzmunST2nPVCJSRdII2DFoC2YWDM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Thiessen Polygon Klinik</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/160w1v8WC1X48dQZ5r-eYMRn3dbuz_esM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Thiessen Polygon Puskesmas</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/18-3ltOJ3u5FgKphs5_8BQ9ewcbAtsER-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Prevalensi Stunting Tingkat Kecamatan Ungaran Barat</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/13UOmP7LUWrGRPGipIEq4jjN9X8mcXSr4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Prevalensi Stunting Tingkat Kecamatan Ungaran Timur</a>
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
    • <a href="https://drive.google.com/file/d/1d4s4J3tg7qANYAe7m3wVvdIqvbcCfhvJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Peta Prevalensi Stunting Tingkat Kecamatan Bawen</a>
  </Typography>
</CardContent>
          </Grid>
        </Grid>
      </Card>
      <Box display="flex" alignItems="center" mt={2} mb={0.5}>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
        Statistika
      </Typography>
      <img src={statisImage} alt="Example" style={{ marginLeft: '1rem', height: '60px' }} />
      </Box>
      <Card sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        marginBottom: '2rem',
        backgroundImage: `url(${bgcardImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%" overflow="auto">
          <BarChart
        width={Math.min(700, window.innerWidth - 40)}
        height={400}
        data={dataset}
        margin={{
          top: 20, right: 30, left: 20, bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Jumlah Stunting', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="ungaranbarat" fill="#8884d8" name="Kecamatan Ungaran Barat" />
              <Bar dataKey="ungarantimur" fill="#82ca9d" name="Kecamatan Ungaran Timur" />
              <Bar dataKey="bawen" fill="#ffc658" name="Kecamatan Bawen" />
            </BarChart>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <PieActiveArc />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}


export default Peta;



