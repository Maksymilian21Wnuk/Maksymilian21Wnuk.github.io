import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

const pages = [
  {name: 'Home',page: ''}, 
  {name:'About', page:'About'}, 
  {name:'Projects', page:'Projects'},];

function Nav() {
  return (
    <>
    <AppBar position="sticky" sx={{ backgroundColor: 'primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
          {pages.map((page, index) => (
            <Box key={index} 
            sx={{ marginRight: index < pages.length - 1 ? '40px' : '0' }}>
              <Button
                component={Link}
                to={`/${page.page}`}
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'secondary.light',
                  },
                }}
              >
                {page.name}
              </Button>
            </Box>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
}

export default Nav;
