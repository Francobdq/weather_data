import { Typography } from '@mui/material';
import React from 'react'
import useCardStyle from './CardStyle.js';

/*  Explicación de componente:
        Este componente es una "tarjeta" que posee un titulo y contenido. (es el recuadro que se muestra de fondo al formulario y a los datos del clima)
*/

/*  Explicación de props:
        title: el titulo de la tarjeta.
        content: el contenido de la tarjeta.
}*/

const Card = ({title, content}) => {
    const classes = useCardStyle();
    return (
        <div className={classes.holderAbs}>
            <div className={classes.holderContent}>
                <Typography variant="h3" className={classes.title}>{title}</Typography>
                {content}
            </div>
        </div>
    )
}

export default Card