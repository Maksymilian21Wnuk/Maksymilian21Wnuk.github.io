import BoxWrapper from "../components/box_wrapper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from "../components/header";

type Paragraph = {
    title: string,
    text: string
}

function paragraph(data : Paragraph) {
    return (
        <Box mb={6} sx= {{borderBottom : 1, borderTop : 1}} >
            <Typography variant="h4" sx={{ mb: '10px' }}>{data.title}</Typography>
            <Typography variant="h5">{data.text}</Typography>
        </Box>
    );
  }
  



export default function Me() {
    const data : Paragraph[] = [
        {
            title : "About me",
            text: `Student of computer science engineering at University of Wrocław. I am interested in programming and software development,
            more precisely low-level programming and operating systems. I am also interested in web development and machine learning. I am looking for an internship in the field of software development to gain experience and learn new technologies`
        },
        {
            title : "Hobbies",
            text: `In my free time I like to play video games, read books and watch movies. I am also passionate about
            computer science, so I spend a lot of time learning new technologies and programming. Moreover, I like swimming and spending my time actively.`
        },
        {
            title : "Things I like in programming",
            text: `I am fond of programming in low level languages like C and C++. I like to write code that is efficient and fast. I am also interested in operating systems and how they work. 
            I like to write code that interacts with hardware and is close to the system. However, I feel great in programming high
            level languages like Python and TypeScript. I like to write code that is easy to read and understand. I am also interested in web development and machine learning.`
        },
        {
            title : "This page",
            text : `This beautiful page was written in TypeScript using React and Material-UI. It is a simple single page application that shows information about me. It consists of four subpages: Me, Education, Experience and Skills. 
            You can navigate between them using the buttons in the header. 
            The page is responsive and looks good on all devices. 
            Source code of page is available on github.`
        }
    ]
    return (
        <>
        <BoxWrapper>
            <Header title="Me" variant="h3" />

        </BoxWrapper>
        <Box mb={4} 
            alignContent={"center"}       
            textAlign="left" 
            pl={50} 
            pr={50}>
                {data.map((item) => paragraph(item))}
        </Box>
        </>
    );
}