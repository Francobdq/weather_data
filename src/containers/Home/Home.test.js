import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../data/ThemeConfig.jsx';
import Home from './Home.jsx';


describe('<TopPart />', () => {

    let component;

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider> 
            );
    })

    // 1. The Home renders correctly
    test('The Home renders correctly', () => {
        // debería haber un formulario con un botón Buscar
        component.getByText("Buscar");
    });


});
