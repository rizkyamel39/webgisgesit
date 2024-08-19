import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import copyImage from './Assets/copy.png';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <>
    <Typography variant="body2" sx={{ color: 'white' }} mt={1}>
      {'Copyright © '}
      <Typography component="span" sx={{ color: 'white' }}>
        Rizky Amelinda Septiani & Rizka Amelinda Septiani&nbsp;
      </Typography>
      {new Date().getFullYear()}
    </Typography>
    <Typography variant="body2" sx={{ color: 'white' }} mt={1}>
    Animation Source : flaticon.com
  </Typography>
</>
  );
}

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'black', width: '100%', color: 'white' }}>  {/* Outer Box */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <Box sx={{ ml: '-15px' }}>
                <img src={copyImage} alt="Example" style={{ marginLeft: '1rem', height: '100px' }} />
              </Box>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2} sx={{ color: 'gray' }}>
                For more information.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexShrink: 0 }}
                  component="a"
                  href="mailto:rizky.amelinda.septiani@gmail.com"
                >
                  CONTACT
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              justifyContent: 'flex-end',
              width: '40%',
            }}
          >
             <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                About Pencegahan Stunting
              </Typography>
              <Link href="/home" color="inherit">
                Home
              </Link>
              <Link href="/pencegahan-stunting" color="inherit">
                Pencegahan Stunting
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                Services
              </Typography>
              <Link href="/peta" color="inherit">
                Peta
              </Link>
              <Link href="/layanan" color="inherit">
                Layanan
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                Get in Touch
              </Typography>
              <Link href="/feedback" color="inherit">
                Feedback
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'gray',
          }}
        >
          <div>
            <Typography display="inline" sx={{ color: 'inherit' }}>
              Geodetic Engineering Diponegoro University
            </Typography>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Typography display="inline" sx={{ color: 'inherit' }}>
              Supervisors: Dr. Ir. Yudo Prasetyo, ST., MT., IPM. & Dr. Yasser Wahyuddin, ST., MT., M.Sc., IPP.
            </Typography>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: 'white',
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              {/* Add GitHub Icon or any other content here */}
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
