import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  // const [mode, setMode] = useState("dark")
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode
  //   }
  // })
  return (
    // <ThemeProvider theme={darkTheme}>
      // <Box>
        // <Box>
          <Stack>
            <Navbar />
          </Stack>
        // </Box>
      // </Box>
    // </ThemeProvider>
  );
}

export default App;
