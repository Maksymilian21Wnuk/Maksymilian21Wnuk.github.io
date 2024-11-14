import Box from '@mui/material/Box';
import BoxWrapper from '../components/box_wrapper';
import Typography from '@mui/material/Typography';
import Header from '../components/header';
import { Grid } from '@mui/material';


function education(item: Data) {
  return (
    <Box border={1} borderRadius="26px" borderColor="secondary.main"
      bgcolor="primary.light"
      sx={{
        textAlign: 'left',
        border: 1,
        borderRadius: '16px',
        p: 2
      }}>
      <Typography variant="h4" sx={{ mb: '10px' }}>{item.degree}</Typography>
      <Typography variant="h5" sx={{ mb: '10px' }}>{item.name}</Typography>
      <Typography variant="h5">{item.year}</Typography>
    </Box>
  )

}

interface Data {
  name: string;
  degree: string;
  year: string;
}

export default function Education() {
  const data: Data[] = [
    {
      name: "University of Wrocław",
      degree: "Computer Science Engineer",
      year: "2021-currently"
    },
    {
      name: "Łask's High School",
      degree: "Bio-chem-math class",
      year: "2018-2021"
    }
  ]


  return (
    <BoxWrapper>
      <Header title="Education" />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: { xs: '100%', md: '60%' }, 
        margin: '0 auto',
      }}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2 }}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={12} key={item.name}>
              {education(item)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </BoxWrapper>
  );
}
