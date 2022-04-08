import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import TableWeather from '../../../components/Table/TableWeather';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import sun from './../../../assets/sun.svg';
import useClimaDataPartStyle from './ClimaDataPartStyle';

/*  Explicación de componente:
      Este componente se encarga de mostrar la sensación termica y el clima actual.
*/

/*  Explicación de props:
      temp: la temperatura que se mostrará.
      icon: el icono que se mostrará el cual indica el clima.
*/

const FeelsLike = ({ temp, icon }) => {
  const classes = useClimaDataPartStyle();
  return (
    <div className={classes.holderFeelsLike}>
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} className={classes.icon} alt={icon} />
      <div className={classes.heigth}>
        <Typography variant="h2" className={classes.temp}>{temp}°</Typography>
        <Typography variant="h5" className={classes.sensacion}>Sensación</Typography>
      </div>
    </div>

  );
};

/*  Explicación de componente:
      Este componente se encarga de mostrar los iconos de flecha y los datos de amanecer y anochecer.
*/

/*  Explicación de props:
      sunrise: la hora de amanecer.
      sunset: la hora de anochecer.
*/

const TwilightContent = ({ sunrise, sunset }) => {
  const classes = useClimaDataPartStyle();
  return (
    <div className={classes.updown}>
      <KeyboardArrowUpIcon />
      <Typography variant="subtitle1" className={classes.center}>{sunrise}</Typography>
      <KeyboardArrowDownIcon />
      <Typography variant="subtitle1" className={classes.center}>{sunset}</Typography>
    </div>
  );
};

/*  Explicación de componente:
      Este componente se encarga de mostrar la imagen del amanecer y del anochecer, también las horas del mismo.
*/

/*  Explicación de props:
      sunrise: la hora del amanecer.
      sunset: la hora del atardecer.
*/

const Twilight = ({ sunrise, sunset }) => {
  const classes = useClimaDataPartStyle();
  return (
    <div className={classes.holderTwilight}>
      <div>
        <img src={sun} alt="sun" className={classes.sun} />

        <TwilightContent sunrise={sunrise} sunset={sunset} />  
      </div>

    </div>
  );
};

/*  Explicación de componente:
      Este componente es el que está en la parte superior de climaDataPart. 
      Informa el clima, la temperatura (sensación termica) y la hora del amanecer y del anochecer.
*/

/*  Explicación de props:
      temp: temperatura que se mostrará.
      sunrise: la hora del amanecer.
      sunset: la hora del atardecer.
      icon: el icono que se mostrará para indicar el clima actual.
*/

const Header = ({ temp, sunrise, sunset, icon }) => {
  const classes = useClimaDataPartStyle();
  return (
    <>
      <div className={classes.topTwilight} >
        <TwilightContent sunrise={sunrise} sunset={sunset} /> 
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FeelsLike temp={temp} icon={icon} />
        </Grid>
        <Grid item xs={6}>
          <Twilight sunrise={sunrise} sunset={sunset} />
        </Grid>

      </Grid>
    </>
    

  );
}

/*  Explicación de componente:
      Este componente se encarga de mostrar la información del clima.
*/

/*  Explicación de props:
      climaData: los datos de clima que se van a mostrar.
*/


const ClimaDataPart = ({ climaData }) => {
  const classes = useClimaDataPartStyle();
  return (
    <div>
      <div className={classes.headerHolder}>
        <Header temp={climaData.feels_like} icon={climaData.icon} sunrise={climaData.sunrise} sunset={climaData.sunset} />
      </div>
      <TableWeather climaData={climaData} />
    </div>
  );
};


export default ClimaDataPart