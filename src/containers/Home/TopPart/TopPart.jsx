import React,{useState} from 'react'
import {TextField, Typography, Button} from '@mui/material'
import AutoCompleteCountry from '../../../components/AutoComplete/AutoCompleteCountry'
import useTopPartSytle from './TopPartStyle'
import ErrorAlert from '../../../components/ErrorAlert/ErrorAlert'


/*  Explicación de componente:
      Es la parte superior de home.
      Posee el titulo y el formulario para buscar el clima de una ciudad.
*/

/*  Explicación de props:
      onSubmit: función que se encarga de avisarle al padre la ciudad y el país seleccionados.
*/

const TopPart = ({ onSubmit }) => {
  const classes = useTopPartSytle();
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [open, setOpen] = useState(false);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (city && countryCode)
      onSubmit(city, countryCode);
    else
      setOpen(true);

    
  }

  return (
    <form onSubmit={handleOnSubmit} className={classes.holder}>
      <ErrorAlert open={open} setOpen={setOpen} message="Asegurese de escribir una ciudad y de seleccionar un país." severity="warning"/>
      <div className={classes.titleHolder}>
        <Typography variant="h3" className={classes.title}>Busca el clima de una ciudad</Typography>
      </div>
      <div className={classes.formInputHolder}>
        <TextField
          required
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Ciudad"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          inputProps={{
            autoComplete: 'off',
            form: {
              autocomplete: 'off',
            },
          }}
        />
      </div>
      <div className={classes.formInputHolder}>
        <AutoCompleteCountry set={setCountryCode} />
      </div>
      <div className={classes.buttonHolder}>
        <Button variant="contained" color="primary" type="submit">Buscar</Button>
      </div>
    </form>
  )
}

export default TopPart