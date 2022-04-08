import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import backgroundData from '../../data/BackgroundData.jsx'
import Card from '../../components/Card/Card.jsx'
import TopPart from './TopPart/TopPart.jsx'
import ClimaDataPart from './ClimaDataPart/ClimaDataPart.jsx'
import Load from '../../components/Load/Load.jsx'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert.jsx'
import useHomeStyle from './HomeStyle.js'



/*  Explicación de componente:
      este componente se encarga de realizar cards con el mismo estilo ya definido.
*/

/*  Explicación de props:
      content: el contenido de la tarjeta.
      title: el titulo de la tarjeta.
*/
const UseStyledCard = ({ content, title }) => {
  const classes = useHomeStyle();
  return (
    <div className={classes.card}>
      <Card title={title ? title : ""} content={content} />
    </div>
  );
}


// esta funcion se encarga de transformar los datos del clima en una estructura mas amigable para mostrar.
const transformValues = (data, state) => {
  const convertFromUnixTime = (unixTime) => {
    var date = new Date(unixTime * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }

  const newClimaData ={
    city: data.name,
    state: state,
    wheater: data.weather[0].main,
    wind: Math.round(data.wind.speed * 3.6),
    cloudiness: data.clouds.all,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    temp_min: Math.round(data.main.temp_min),
    temp_max: Math.round(data.main.temp_max),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    sea_level: data.main.sea_level,
    grnd_level: data.main.grnd_level,
    visibility: data.visibility / 1000,
    sunrise: convertFromUnixTime(data.sys.sunrise),
    sunset: convertFromUnixTime(data.sys.sunset),
    icon: data.weather[0].icon.substring(0, 2) + "d",
  }
  return newClimaData; 
}




/*  Explicación de componente:
      Home es el componente principal.
      Se encarga de: 
        - obtener los datos del clima de la ciudad seleccionada y llamar a la api.
        - mostrar los datos del clima en una tarjeta.
        - mostrar una alerta de error en caso de que no se pueda obtener los datos del clima.
        - cambiar el fondo de la app según el clima.
*/

/*  Explicación de props:
      climaData: los datos de clima que se van a mostrar.
*/


const Home = () => {
  const classes = useHomeStyle();
  const [loading, setLoading] = useState(false); // utilizado para mostrar la interfaz de carga 
  const [dataAlreadyLoad, setDataAlreadyLoad] = useState(false); // para saber si ya existen datos.
  const [cloudiness, setCloudiness] = useState(-1); // para determinar la nubocidad y saber que imagen de fondo colocar. 
  const [climaData, setClimaData] = useState(null); // para guardar los datos del clima.

  // la app id
  const appid = process.env.REACT_APP_ID; 

  // las constantes que indican las url
  const urlFindCityCords = "https://api.openweathermap.org/geo/1.0/direct?"; // la url para encontrar la lat y lon de la ciudad.
  const urlFindClima = "https://api.openweathermap.org/data/2.5/weather?"; // la url para obtener los datos del clima.

  // hooks para mostrar las alertas de error.
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("");


  // para mostrar las alertas de posibles errores.
  const handleAlert = (newMessage, newSeverity) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  // selecciona la imagen de fondo segun el clima.
  const SelectBackgroundImage = (cloudinessAux) => {
    cloudinessAux = (cloudinessAux > 100) ? 100 : ((cloudinessAux < 0) ? 0 : cloudinessAux);
    return backgroundData.find(item => cloudinessAux <= item.maxRange).image;
  };

  // cuando se busca una ciudad el botón llama a este metodo.
  const onSubmit = (city, countryCode) => {
    if(loading) return;

    setLoading(true);
    const queryFindCityCords = `q=${city},${countryCode}&limit=1&appid=${appid}`;

    // realizo un primer fetch para buscar las coordenadas de la ciudad elegida
    fetch(urlFindCityCords + queryFindCityCords)
      .then(res => { 
        if (res.ok) return res.json(); else throw new Error("Error en la conexión con el servidor. Intente nuevamente más adelante.");
      })
      .then(data => {
        if (!data[0])
          throw new Error("La ciudad no pudo ser encontrada en ese país. Asegurese de que los datos sean correctos.");
        const state = data[0].state;
        const queryFindClima = `lat=${data[0].lat}&lon=${data[0].lon}&lang=es&units=metric&appid=${appid}`;

        // una vez tengo las coordenadas, realizo un segundo fetch para obtener los datos climáticos
        fetch(urlFindClima + queryFindClima)
          .then(res => res.json())
          .then(data => {

            const newClimaData = transformValues(data, state); 

            
            // seteo los nuevos datos climáticos
            setClimaData(newClimaData);
            setCloudiness(newClimaData.cloudiness);

            // seteo que ya se cargaron los datos
            setDataAlreadyLoad(true);
            setLoading(false);
          })
      }).catch(err => {
        console.log(err);
        if (err.name === "TypeError")
          handleAlert("Error en la conexión con el servidor. Asegurese de poseer internet e intente de nuevo más tarde.", "error");
        else
          handleAlert(err.message, "error");

        setLoading(false);
      });
  }

  return (
    <div className={classes.background} style={{ backgroundImage: `url(${SelectBackgroundImage(cloudiness)})` }}>{/*style={{backgroundColor: `${SelectBackground(cloudiness)}`}}>*/}
      <ErrorAlert open={open} setOpen={setOpen} message={message} severity={severity}/>
      <UseStyledCard content={<TopPart onSubmit={onSubmit} />} />
      {
        loading ?
          <Load />
          :
          dataAlreadyLoad ?
            <UseStyledCard title={`${climaData.city}, ${climaData.state}`} content={<ClimaDataPart climaData={climaData}/>} />
            :
            <div/>
      }

    </div>
  )
}

export default Home