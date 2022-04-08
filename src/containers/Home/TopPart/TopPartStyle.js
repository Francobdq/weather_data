import { makeStyles } from "@mui/styles";


// los estilos que se utilizan en la parte del home que contiene la card con el formulario de busqueda

const useTopPartSytle = makeStyles(theme => ({
    card:{
        margin: '0 auto',
        width: '80%',
        paddingTop: '2rem',
        paddingBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '98%',
        },
    },
    holder:{
        width: '70%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    titleHolder:{
        paddingBottom: '2rem',
    },
    title:{
        textAlign: 'center',
    },
    formInputHolder:{
        paddingBottom: '1rem',
        margin: '0 auto',
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    buttonHolder:{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '5%',
        paddingTop: '1rem',
        paddingBottom: '0',
    },
}));

export default useTopPartSytle;