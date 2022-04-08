import { makeStyles } from "@mui/styles";

// los estilos que se utilizan en la parte del home que contiene la card con los datos del clima

const useClimaDataPartStyle = makeStyles((theme) => ({
    headerHolder: {
        padding: '0rem 4rem 0.5rem 0rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        }
    },
    updown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: '0.5rem',
    },
    temp: {
        paddingLeft: '1rem',
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0.5rem',
            paddingTop: '1.5rem',
        }
    },
    sensacion: {
        textAlign: 'center',

    },
    icon: {
        margin: 'auto 0',
        height: '10rem',
        width: '10rem',
        [theme.breakpoints.down('sm')]: {
            height: '7rem',
            width: '7rem',
        },
    },
    sun: {
        height: "7rem",
        width: "8rem",
    },
    holderFeelsLike: {
        display: "flex",
        displayDirection: "row",

    },
    holder: {
        display: "flex",
    },
    holderTwilight: {

        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    topTwilight:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: '0.5rem',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

export default useClimaDataPartStyle;