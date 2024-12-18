import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import Header from './components/header';
import GitHubIcon from '@mui/icons-material/GitHub';
import BoxWrapper from './components/box_wrapper';


export default function Projects() {
  const projects = [
    {
      "name": "Flight delay prediction",
      "description": "Machine learning flight delay prediction project",
      "technologies": "Python with: numpy, pandas, sklearn, matplotlib, seaborn, jupyter notebook",
      "githubLink": "https://github.com/Maksymilian21Wnuk/Flight-Delay-Prediction-Project"
    },
    {
      "name": "GraphVisual",
      "description": "Interactive visualisation of graph algorithms with API for writing own algorithm visualisations.",
      "technologies": "React, typescript, tailwind, daisy.ui, React Flow",
      "githubLink": "https://github.com/Maksymilian21Wnuk/GraphVisual"
    },
    {
      "name": "React Projects for laboratories",
      "description": "Projects made during 2023/2024 summer term in react.",
      "technologies": "React with typescript, Material UI, SASS, tailwind.",
      "githubLink": "https://github.com/Maksymilian21Wnuk/React-projects"
    },
    {
      "name": "D-Bus Tutorial",
      "description": "D-Bus programming examples in python with explanations for linux advanced seminar.",
      "technologies": "Python, D-Bus mechanism, linux based OS",
      "githubLink": "https://github.com/Maksymilian21Wnuk/D-Bus-Examples"
    },
    {
      "name": "Login site with argon2",
      "description": "Frontend + backend website that uses argon2 for verifying password",
      "technologies": "JavaScript, My-Sql, Express.js, html + css",
      "githubLink": "https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/login_website"
    },
    {
      "name": "Embedded Systems Mini-Projects",
      "description": "Avr microcontrollers programming controllers written in c language",
      "technologies": "C, Atmega 328p microcontroller, AVR",
      "githubLink": "https://github.com/Maksymilian21Wnuk/UWr-/tree/main/embedded_systems"
    },
    {
      "name": "J-Flashcards",
      "description": "Java swing based GUI app for learning languages with flashcards made for objective programming classes",
      "technologies": "Java, Java Swing",
      "githubLink": "https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards"
    },
    {
      "name": "Traceroute",
      "description": "Implementation of traceroute linux program in C for networking classes",
      "technologies": "C",
      "githubLink": "https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/traceroute"
    }

  ];

  return (
<BoxWrapper>
  <Header title="Projects" />
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      maxWidth: { xs: '100%', md: '60%' },
      margin: '0 auto', 
    }}
  >
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2 }}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={12} key={project.name}>
          <Box
            mb={3}
            p={2}
            bgcolor="primary.light"
            sx={{
              textAlign: 'left',
              border: 1,
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography variant="h4" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {project.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Technologies used: {project.technologies}
              </Typography>
            </div>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <GitHubIcon />
                Source code
              </IconButton>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
</BoxWrapper>  );
}
