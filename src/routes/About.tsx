import Header from "./components/header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, Outlet } from "react-router-dom";
import BoxWrapper from "./components/box_wrapper";

export default function About() {
  const pages = ["Me", "Education", "Experience", "Skills"]
  
  return (
<div className="About">
  <BoxWrapper>
    <Header title="About me" />
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        gap: '40px',
        '& .MuiButton-root': { 
          width: '200px',
          height: '60px', 
        }
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          component={Link}
          to={`/About/${page}`}
          sx={{
            color: 'primary.light',
            textDecoration: 'none',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
            },
          }}
        >
          {page}
        </Button>
      ))}
    </Box>                
  </BoxWrapper>
  <Outlet/>
</div>
  );
}