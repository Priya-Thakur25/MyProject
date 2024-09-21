import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { getPlacedData } from './api';

const theme = createTheme(); // You can customize the theme here if needed

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates,setCoordinates] = useState({lat:0, lng:0});
  const [bounds, setBounds] = useState(null);


  useEffect(() => {
    getPlacedData()
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds = {setBounds}
          coordinates = {coordinates}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
