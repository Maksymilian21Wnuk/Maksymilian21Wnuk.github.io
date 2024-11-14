import Header from "../components/header";
import BoxWrapper from "../components/box_wrapper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function exp_cards(item : any){
    return (
        <Box border={1} borderRadius="26px" borderColor="secondary.main" sx={{textAlign:"left", width: '1000px', p: '20px', borderRadius: '8px', backgroundColor: 'primary.light', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{mb:'10px'}}>{item.name}</Typography>
            <Typography variant="h5" sx={{mb:'10px'}}>{item.position}</Typography>
            <Typography variant="h5" sx={{mb:'10px'}}>{item.date}</Typography>
            <Typography variant="h5">{item.description}</Typography>

        </Box>
    )
    
}

export default function Experience() {
    const data = [
        {
            name : "BNY Mellon",
            position: "Software Engineer Intern",
            date: "6/2024-9/2024",
            description: "Full-stack engineer work, including Java Spring, Angular, J-Unit."
        }
      ]

    return (
        <BoxWrapper>
            <Header title="Experience" />
                {data.map((item) => exp_cards(item))}
        </BoxWrapper>
    );
}