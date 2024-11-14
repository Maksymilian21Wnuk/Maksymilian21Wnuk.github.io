import Box from '@mui/material/Box';

type BoxWrapperProps = {
  children: React.ReactNode;
};

export default function BoxWrapper({ children }: BoxWrapperProps) {
  return (
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      {children}
    </Box>
  );
}