import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {  render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../../data/ThemeConfig.jsx';
import ClimaDataPart from './ClimaDataPart.jsx';


const climaDataTest = {
    city: "London",
    state: "Test",
    wheater: "Clouds",
    wind: 12,
    cloudiness: 65,
    temp: 4,
    feels_like: 2,
    temp_min: 3,
    temp_max: 7,
    pressure: 1001,
    humidity: 74,
    visibility: 10,
    sunrise: "7:50",
    sunset: "17:32",
    icon: "04d",
}


describe('<ClimaDataPart />', () => {

    let component;

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <ClimaDataPart climaData={climaDataTest}/>
            </ThemeProvider> 
            );
        
    })

    // 1. The ClimaDataPart renders correctly
    test('The ClimaDataPart renders correctly', () => {
        component.getByText("Sensación");
    });

    // 2. The table renders the correct content
    test('The table renders the correct content', () => {

        component.getByAltText("04d"); // the icon
        component.getAllByText("2°"); // the feels_like
        component.getAllByText("7:50"); // the sunrise
        component.getAllByText("17:32"); // the sunset

    });


});


