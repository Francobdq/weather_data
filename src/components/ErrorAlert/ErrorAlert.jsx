import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

/*  Explicación de componente:
        Este componente se encarga de mostrar una alerta en el centro superior de la pantalla
*/

/*  Explicación de props:
        open: booleano que indica si la alerta está abierta o no.
        setOpen: función que se encarga de cerrar/abrir la alerta.
        severity: el tipo de alerta que se mostrará.(error, warning, info, success)
        message: el mensaje que se mostrará en la alerta.
}*/



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorAlert = ({ open, setOpen, severity, message}) => {
    severity = severity || 'error';
    const vertical = 'top';
    const horizontal = 'center';

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} id="alert">
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default ErrorAlert;