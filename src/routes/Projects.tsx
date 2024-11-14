import { Box, Typography, Link, IconButton } from '@mui/material';
import Header from './components/header';
import GitHubIcon from '@mui/icons-material/GitHub';
import BoxWrapper from './components/box_wrapper';


export default function Projects() {
  // Dummy data for projects
  const projects = [
    {
      name: 'Login site with argon2',
      description: `Frontend + backend website that \n
                    uses argon2 for verifying password`,
      technologies: 'JavaScript, My-Sql, Express.js, html + css',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/login_website',
    },
    {
      name: 'J-Flashcards',
      description: 'Java swing based GUI app for learning languages with flashcards made for objective programming classes',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
    },
    {
      name: 'Embedded Systems Mini-Projects',
      description: 'Avr microcontrollers programming controllers written in c language',
      technologies: 'C, Atmega 328p microcontroller, AVR',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/embedded_systems',
    },
    {
      name: 'React Projects for laboratories',
      description: 'Java swing based GUI app for learning languages with flashcards',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/React-projects',
    },
    {
      name: 'Traceroute',
      description: 'Implementation of traceroute linux program in C for networking classes',
      technologies: 'Pure C',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/traceroute',
    },
    {
    name: 'Flight delay prediction',
    description: 'Machine learning flight delay prediction project',
    technologies: 'Python with: numpy, pandas, sklearn, matplotlib, seaborn, jupyter notebook',
    githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
  }

  ];

  return (
    <BoxWrapper>
    <Header title="Projects" />
      {projects.map((project) => (
        <Box 
          key={project.name} 
          mb={3} 
          p={2}
          width={600}
          bgcolor="primary.light"
          sx={{ 
            textAlign: 'left', 
            border : 1, 
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' // Align items in a column
          }}
        >
          <div>
            <Typography variant="h5" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {project.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
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
      ))}
    </BoxWrapper>
  );
}
