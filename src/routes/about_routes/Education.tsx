import Box from '@mui/material/Box';
import BoxWrapper from '../components/box_wrapper';
import Typography from '@mui/material/Typography';
import Header from '../components/header';


function education(item : any){
    return (
        <Box border={1} borderRadius="26px" borderColor="secondary.main" sx={{textAlign:"left", width: '1000px', p: '20px', borderRadius: '8px', backgroundColor: 'primary.light', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{mb:'10px'}}>{item.degree}</Typography>
            <Typography variant="h5" sx={{mb:'10px'}}>{item.name}</Typography>
            <Typography variant="h5">{item.year}</Typography>
        </Box>
    )
    
}


export default function Education() {
  const data = [
    {
        name : "University of Wrocław",
        degree: "Computer Science Engineer",
        year: "2021-currently"
    },
    {
        name : "Łask's High School",
        degree : "Bio-chem-math class",
        year: "2018-2021"
    }
  ]


  return (
    <BoxWrapper>
        <Header title="Education" />
            {data.map((item) => education(item))}
    </BoxWrapper>
  );
}
