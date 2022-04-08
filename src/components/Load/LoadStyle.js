import { makeStyles } from '@mui/styles'

// los estilos que se utilizan en la pantalla de carga

const useLoadStyle = makeStyles((theme) => ({
    loadHolder:{
        width: "100%",
        height: "100%",
    },
    loadImg:{
        // center in the div
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
    }
}));

export default useLoadStyle