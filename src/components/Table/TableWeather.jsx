import React from 'react'
import { Typography} from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import useTableWeatherStyle from './TableWeatherStyle.js';
import dataWeatherTable from '../../data/DataWeatherTable.jsx';



/*  Explicación de componente:
        Este componente se encarga del manejo de la fila de la tabla. Posee unicamente 2 columnas.
        su estructura es:
        | icono-cell1 | cell2 | 
*/

/*  Explicación de props:
        cell1: la primer celda de la fila.
        cell2: la segunda celda de la fila.
        icon: el icono de la columna.
}*/

const Row = ({cell1, cell2, icon}) => {
    const classes = useTableWeatherStyle();
    return(
        <>
            <TableCell component="th" scope="row">
                <div className={classes.row}>
                    <div className={classes.icon}>{icon}</div>
                    <div className={classes.autoCenterVertical}><Typography variant="body1" >{cell1}</Typography></div>
                </div>                
            </TableCell>
            <TableCell align="right"><Typography variant="body1" >{cell2}</Typography></TableCell>
        </>

    );

};

/*  Explicación de componente:
        Este componente se encarga de mostrar una unica tabla con los datos del clima.
*/

/*  Explicación de props:
        climaData: los datos del clima.
}*/

const SimpleTable = ({dataArr, climaData}) => {
    const classes = useTableWeatherStyle();
    return(
        <TableContainer className={classes.table}>
            <Table aria-label="simple table" >
                <TableBody>
                    {
                        dataArr.map((item, index) => {

                            return(
                                <TableRow
                                    key={index}
                                    className={classes.rowStyle}>
                                    <Row 
                                        icon={item.icon}
                                        cell1={item.title}
                                        cell2={`${climaData[item.key]}${item.after}`}
                                    />
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
             </Table>
        </TableContainer>
    )
}


/*  Explicación de componente:
        Este componente se encarga de mostrar la tabla de datos del clima.
*/

/*  Explicación de props:
        climaData: los datos del clima.
}*/


const TableWeather = ({climaData}) => {
    const classes = useTableWeatherStyle();
    
    // elimino los elementos de dataWeatherTable que no tengan climaData[item.key]
    const dataArr = dataWeatherTable.filter(item => climaData[item.key] !== undefined);

    // divido dataArr en 2 arreglos para que se muestren en 2 tablas en las pantallas de computadoras.
    const part1 = dataArr.slice(0,Math.ceil(dataArr.length/2));
    const part2 = dataArr.slice(Math.ceil(dataArr.length/2));

    return (
        <div>
            <div className={classes.twoTables}>
                <div className={classes.spacingTable}>
                    <SimpleTable climaData={climaData} dataArr={part1}/>
                </div>
                <div className={classes.spacingTable}>
                    <SimpleTable climaData={climaData} dataArr={part2}/>
                </div>
            </div>
            <div className={classes.oneTable}>
                <SimpleTable climaData={climaData} dataArr={dataArr}/>
            </div>
        </div>
    )
}

export default TableWeather