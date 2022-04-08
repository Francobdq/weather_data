import { makeStyles } from '@mui/styles'

// los estilos que se utilizan en la Card

const useCardStyle = makeStyles((theme) => ({
    holderAbs:{
        backgroundColor: 'rgba(255,255,255,0.99)', 
        borderRadius: "10px",
        //border: "solid 0.2px #9e9e9e",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    },

    holderContent:{
        padding: "1rem",
        paddingBottom: "3rem",
    },
    title:{

        // se centra el texto en resoluciones más pequeñas.
        [theme.breakpoints.down('sm')]: {
            textAlign : 'center',
        },
    }
}));

export default useCardStyle