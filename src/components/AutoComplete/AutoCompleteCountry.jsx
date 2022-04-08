import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from '../../data/CountryData.jsx';

/*  Explicación de componente:
        Este componente se encarga de mostrar una lista de países en un autocompletado.
*/

/*  Explicación de props:
        set: función que se encarga de informar al componente padre el código del país seleccionado.
}*/


const AutoCompleteCountry = ({ set }) => {

    // cuando hay un cambio en el autocompletado, se ejecuta la función set pasada por props.
    const handleOnChange = (event, value) => {
        if (value && value.code) 
            set(value.code);
        else
            set("");
        
    }

    return (
        <Autocomplete
            id="country-select"
            sx={{ width: "100%"}}
            options={countries}
            onChange={handleOnChange}
            autoHighlight
            aria-required
            getOptionLabel={(option) => option.label}
            renderOption={
                /* creo una lista de paises junto a su bandera, nombre y código de país*/
                (props, option) => (
                <Box title={option.code} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} required {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    required
                    aria-required
                    id="elige-pais"
                    {...params}
                    label="Elige un país"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'off',
                        form: {
                          autocomplete: 'off',
                        },
                      }}
                    
                />
            )}
        />
    );
}

export default AutoCompleteCountry;