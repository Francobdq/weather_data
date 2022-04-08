import { makeStyles } from "@mui/styles";


// los estilos propios de Home

const useHomeStyle = makeStyles((theme) => ({
  // el fondo de la web (la imagen que se muestra es decidida desde Home para cambiarla según el clima).
    background: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
      minHeight: '100vh',
  
    },

    // para posicionar las cards
    card: {
      margin: '0 auto',
      width: '80%',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      [theme.breakpoints.down('sm')]: {
        width: '98%',
      },
    },
  }));

  export default useHomeStyle;