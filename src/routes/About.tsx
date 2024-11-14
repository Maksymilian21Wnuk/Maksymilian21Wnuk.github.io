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
        <Header title="About" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Column layout for xs, row for sm and above
            justifyContent: { xs: 'center', sm: 'flex-end' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: '20px', // Adjust the gap for better spacing between buttons
            '& .MuiButton-root': {
              width: '200px',
              height: '60px',
            },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={`/About/${page}`}
              sx={{
                color: 'white',
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

      <Outlet />
    </div>
  );
}