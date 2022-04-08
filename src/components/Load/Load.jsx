import React from 'react'
import useLoadStyle from './LoadStyle.js';
import loadSVG from './../../assets/load.svg' // svg with animation

/*  Explicación de componente:
        Este componente se encarga de mostrar la pantalla de carga
*/

/*  Explicación de props:
      No posee props.
}*/

const Load = () => {
    const classes = useLoadStyle();
  return (
    <div className={classes.loadHolder}>
        <img src={loadSVG} stroke="white" alt="loading" className={classes.loadImg} />
    </div>
  )
}

export default Load