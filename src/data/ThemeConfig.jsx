import { createTheme } from '@mui/material/styles';

/* Este archivo es el responsable de crear el tema de la app. */

// los colores que se usaran en la app.
const COLORS = {
    blue_primary: "#3C6C8D",
    black_text: "#19191A",
    disabled: "#79797A",
    blue_tertiary: "#1E3646",
    white: "#FFFFFF",
}

const theme = createTheme({
    palette:{
        background:{
            default: COLORS.white,
        },
        primary:{
            main: COLORS.blue_primary,
        },
        text:{
            primary: COLORS.black_text,
            secondary: COLORS.blue_tertiary,
            disabled: COLORS.disabled,
        },
        typography:{
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        }
    },

});

// edito la tipografía luego de crear el tema así tengo los breakpoints ya creados.
// en esta seccion se editan los tamaños de las letras segun la resolución de pantalla. (si es vacio en resolución mas chica es porque conserva la resolución.)
theme.typography.h1 = {
    fontSize: "6rem",
    [theme.breakpoints.down('md')]: {
        fontSize: '0.5rem',
    },
};
theme.typography.h2 = {
    fontSize: "3.75rem",
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
    },
};
theme.typography.h3 = {
    fontSize: "3.25rem",
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
};
theme.typography.h5 = {
    fontSize: "1.5rem",
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
};
theme.typography.subtitle1 = {
    fontSize: "1rem",
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
};
theme.typography.body1 = {
    fontSize: "0.875rem",
    [theme.breakpoints.down('md')]: {
        
    },
};


export default theme;