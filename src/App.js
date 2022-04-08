import React, { useState } from 'react';
import theme from './data/ThemeConfig.jsx';
import { ThemeProvider } from '@mui/material/styles';
import Home from './containers/Home/Home.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
