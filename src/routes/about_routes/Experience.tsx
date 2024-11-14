import Header from "../components/header";
import BoxWrapper from "../components/box_wrapper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";


function exp_cards(item: ExpInterface) {
    return (
        <Box border={1} borderRadius="26px" borderColor="secondary.main"
            bgcolor="primary.light"
            sx={{
                textAlign: 'left',
                border: 1,
                borderRadius: '16px',
                p: 2
            }}>
            <Typography variant="h4" sx={{ mb: '10px' }}>{item.name}</Typography>
            <Typography variant="h5" sx={{ mb: '10px' }}>{item.position}</Typography>
            <Typography variant="h5" sx={{ mb: '10px' }}>{item.date}</Typography>
            <Typography variant="h5">{item.description}</Typography>

        </Box>
    )

}

interface ExpInterface {
    name: string;
    position: string;
    date: string;
    description: string;
}

export default function Experience() {
    const data: ExpInterface[] = [
        {
            name: "BNY Mellon",
            position: "Software Engineer Intern",
            date: "6/2024-9/2024",
            description: "Full-stack engineer work, including Java Spring, Angular, J-Unit."
        }
    ]

    return (
        <BoxWrapper>
            <Header title="Experience" />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: { xs: '100%', md: '60%' },
                margin: '0 auto',
            }}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={12} key={item.name}>
                        {exp_cards(item)}
                    </Grid>))}
            </Box>
        </BoxWrapper>
    );
}