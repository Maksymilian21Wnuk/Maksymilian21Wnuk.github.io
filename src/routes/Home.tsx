import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from './components/header';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import * as React from 'react';
import myImage from "../assets/me.png";
import BoxWrapper from './components/box_wrapper';

function Home() {
  const [mail, setMail] = React.useState(false);


  return (
    <BoxWrapper>
    <Header variant='h3' title='Maksymilian Wnuk' />
      <Typography variant="h3" paragraph>
        <Box fontWeight="300">
        Computer Science Student
        </Box>
      </Typography>

      <Box sx={{ maxWidth: '100%', marginBottom: 2, borderRadius: '50%', overflow: 'hidden' }}>
        <img src={myImage} 
        alt="ME" 
        style={{ maxWidth: '100%', height: 'auto' }}/>
      </Box>

      <Typography variant="h4" paragraph>
        <Box fontWeight="300">
          Programmer
        </Box>
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          startIcon={<GitHubIcon />}
          href="https://github.com/Maksymilian21Wnuk"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          GitHub
        </Button>
        <Button
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/maksymilian-wnuk-704370240/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          LinkedIn
        </Button>

        <Button
          startIcon={<AlternateEmailIcon />}
          variant="contained"
          color="primary"
          onClick={() => setMail(!mail)}
        >
          Show Mail
        </Button>
        {mail ? <Typography>maksymilian21wnuk@gmail.com</Typography>: null} 

      </Box>
    </BoxWrapper>
  );
}

export default Home;