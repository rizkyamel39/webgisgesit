import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Box } from '@mui/material';
import '@fontsource/be-vietnam-pro';
import whyImage from './Assets/why.gif';
import heightImage from './Assets/height.gif';
import pusingImage from './Assets/pusing.gif';
import virusImage from './Assets/virus.gif';
import milkImage from './Assets/milk.gif';
import janinImage from './Assets/janin.gif';
import weightImage from './Assets/weight.gif';
import asuhImage from './Assets/asuh.gif';
import wcImage from './Assets/wc.gif';
import stressImage from './Assets/stress.gif';
import suntikanImage from './Assets/suntikan.gif';
import putriImage from './Assets/putri.gif';
import giziImage from './Assets/gizi.gif';
import imunisasiImage from './Assets/imunisasi.gif';
import asiImage from './Assets/asi.gif';
import ttdImage from './Assets/ttd.gif';
import mealImage from './Assets/meal.gif';
import piringkuImage from './Assets/piringku.png';
import bg2 from './Assets/bg2.jpg';
import bgcardImage from './Assets/bgcard.png';
import topImage from './Assets/top.gif';
import intervensiImage from './Assets/intervensi.png';
import spesifikImage from './Assets/spesifik.png';

function ApaItuStunting() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'left', 
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Typography variant="h4" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', fontWeight: 'bold' }}>
        PENCEGAHAN STUNTING
      </Typography>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Definisi Stunting
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
          <Grid item xs={12} md={3}>
            <Box sx={{ paddingLeft: '7rem' }}>
              <CardMedia
                component="img"
                height="180"
                image={whyImage}
                alt="Why"
                sx={{ marginBottom: '0rem', width: '80%', objectFit: 'contain' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent sx={{ paddingLeft: '2rem' }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                Stunting adalah kondisi masalah gizi kronis akibat kurangnya asupan gizi dalam jangka waktu panjang sehingga mengakibatkan terganggunya pertumbuhan pada anak. Stunting juga menjadi salah satu penyebab tinggi badan anak terhambat, sehingga lebih rendah dibandingkan anak-anak seusianya dan keterlambatan berpikir. Kekurangan gizi terjadi sejak janin dalam kandungan sampai awal kehidupan anak (1000 hari pertama kelahiran).
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Ciri-Ciri Stunting
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
                • Tanda Pubertas Terlambat
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Pertumbuhan Melambat
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Tinggi Badan Tidak Sesuai Usia
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Usia 8-10 Tahun Anak Menjadi Lebih Pendiam
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Pertumbuhan Gigi Terlambat
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Wajah Tampak Lebih Muda Dari Anak Seusianya
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Kesulitan Belajar
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Mudah Terserang Penyakit
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
                • Berat Badan Anak Tidak Naik Bahkan Cenderung Menurun
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingRight: '6rem' }}>
              <CardMedia
                component="img"
                height="180"
                image={heightImage}
                alt="Height"
                sx={{ marginBottom: '1rem', width: '40%', objectFit: 'contain' }}
              />
              <CardMedia
                component="img"
                height="180"
                image={pusingImage}
                alt="Pusing"
                sx={{ marginBottom: '1rem', width: '40%', objectFit: 'contain' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="h5" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', marginTop: '3rem', fontWeight: 'bold' }}>
        Penyebab Stunting
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
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={virusImage} alt="Virus" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Penyakit Infeksi Yang Berulang
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={milkImage} alt="Milk" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Tidak Mendapatkan ASI Eksklusif
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={janinImage} alt="Janin" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Asupan Gizi Yang Kurang Selama Kehamilan
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={weightImage} alt="Weight" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem', marginBottom: '2rem' }}>
                Berat Badan Bayi Yang Rendah Saat Lahir
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={asuhImage} alt="Asuh" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Pola Asuh Yang Tidak Baik
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={wcImage} alt="Wc" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Kurangnya Akses Air Bersih Dan Sanitasi
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={stressImage} alt="Stress" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Stres Berlebih Pada Ibu
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={suntikanImage} alt="Suntikan" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Kurangnya Imunisasi
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={putriImage} alt="Putri" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Remaja Putri Tidak Mendapatkan Edukasi Kesehatan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="h5" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', marginTop: '3rem', fontWeight: 'bold' }}>
        Pencegahan Stunting
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
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={giziImage} alt="Gizi" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Asupan Gizi Yang Seimbang
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={asiImage} alt="Asi" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Pemberian ASI Eksklusif
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={imunisasiImage} alt="Imunisasi" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Imunisasi Rutin
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={ttdImage} alt="Ttd" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Mengonsumsi Tablet Tambah Darah
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CardMedia component="img" height="100" image={mealImage} alt="Meal" sx={{ margin: '0.5rem', objectFit: 'contain' }} />
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', marginTop: '0.5rem' }}>
                Pemberian ASI Didampingi pemberian MPASI Usia 6-24 bulan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CardMedia
          component="img"
          height="auto"
          image={piringkuImage}
          alt="Piringku"
          sx={{ width: '75%', objectFit: 'cover' }}
        />
      </Box>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Intervensi Prioritas
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
          <Grid item xs={12} md={3}>
            <Box sx={{ paddingLeft: '7rem' }}>
              <CardMedia
                component="img"
                height="180"
                image={topImage}
                alt="Top"
                sx={{ marginBottom: '0rem', width: '80%', objectFit: 'contain' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent sx={{ paddingLeft: '2rem' }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Be Vietnam Pro', textAlign: 'justify' }}>
              Intervensi prioritas pencegahan stunting dibagi dalam dua kelompok, yaitu intervensi spesifik dan intervensi sensitif. 
              Intervensi spesifik adalah intervensi yang menyasar penyebab langsung stunting dan hampir seluruhnya berada pada sektor kesehatan. 
              Intervensi spesifik meliputi: 1) Kecukupan asupan makanan dan gizi; 2) Pemberian makan, perawatan dan pola asuh; dan 3)Pengobatan infeksi/penyakit.
              Sementara itu intervensi sensitif adalah intervensi yang menyasar penyebab tidak langsung dan berada di luar sektor kesehatan (sumber : Peta Jalan Percepatan Pencegahan Stunting Indonesia 2018-2024).
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CardMedia
          component="img"
          height="auto"
          image={intervensiImage}
          alt="Intervensi"
          sx={{ width: '75%', objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CardMedia
          component="img"
          height="auto"
          image={spesifikImage}
          alt="Spesifik"
          sx={{ width: '75%', objectFit: 'cover' }}
        />
      </Box>
    </div>
  );
}

export default ApaItuStunting;
