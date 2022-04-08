import { makeStyles } from '@mui/styles'

// los estilos que se utilizan en la tabla de datos del clima

const useTableWeatherStyle = makeStyles((theme) => ({
    row:{
        display: "flex",
        flexDirection: "row",
    },
    oneTable:{
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "flex",
        },
    },
    twoTables:{
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },
    spacingTable:{
        width: "100%",
        padding: "0rem 0.5rem",
    },
    icon:{
        paddingTop:"0.2rem",
        paddingRight:"0.5rem",
    },
    table:{
        borderColor: "transparent",
        boxShadow: "none",

    },
    autoCenterVertical:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
}));

export default useTableWeatherStyle