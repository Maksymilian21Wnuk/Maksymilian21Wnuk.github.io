import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function Header(props: {title: string, variant?: string}) {
    return (
    <Typography variant="h3" gutterBottom>
        <Box fontWeight="300" >
            {props.title}
        </Box>
    </Typography>
);
}