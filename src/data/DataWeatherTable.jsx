import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import WaterIcon from '@mui/icons-material/Water';
import GrassIcon from '@mui/icons-material/Grass';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// Los datos que se mostraran en la tabla de clima 

// key: el nombre del dato.
// title: el titulo del dato. (colocado en la columna izquierda de la tabla del clima.)
// after: el texto que se debe mostrar despues de colocar el dato.
// icon: el icono que se debe mostrar.

const dataTable = [
    {
        key: "temp",
        title: "Temperatura",
        after: " °C",
        icon: <DeviceThermostatIcon />,
    },
    {
        key: "temp_max",
        title: "Temperatura Máxima",
        after: " °C",
        icon: <ArrowDropUpIcon />,
    },
    {
        key: "temp_min",
        title: "Temperatura Mínima",
        after: " °C",
        icon: <ArrowDropDownIcon />,
    },
    {
        key: "wind",
        title: "Viento",
        after: " km/h",
        icon: <AirIcon />,
    },
    {
        key: "cloudiness",
        title: "Nubosidad",
        after: " %",
        icon: <CloudIcon />,
    },
    {
        key: "humidity",
        title: "Humedad",
        after: " %",
        icon: <OpacityIcon />,
    },
    {
        key: "pressure",
        title: "Presión atmosferica",
        after: " hPa",
        icon: <CompressIcon />,
    },
    {
        key: "sea_level",
        title: "Presión a nivel del mar",
        after: " hPa",
        icon: <WaterIcon />,
    },
    {
        key: "grnd_level",
        title: "Presión a nivel del suelo",
        after: " hPa",
        icon: <GrassIcon />,
    },
    {
        key: "visibility",
        title: "Visibilidad",
        after: " km",
        icon: <RemoveRedEyeIcon />,
    }
]

export default dataTable;