import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../data/ThemeConfig.jsx';
import TableWeather from './TableWeather.jsx';

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


describe('<TableWeather />', () => {

    let component;

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <TableWeather climaData={climaDataTest} state={"Test"} />
            </ThemeProvider>
            );
        
    })

    // 1. The table renders correctly
    test('The table renders correctly', () => {
        component.container.querySelector("table")
    });

    // 2. The table renders the correct content
    test('The table renders the correct content', () => {

        const texts =[
            "12 km/h",
            "65 %",
            "4 °C",
            "3 °C",
            "7 °C",
            "1001 hPa",
            "74 %",
            "10 km",
        ]
        
        component.container.querySelectorAll("p").forEach(x => {
            if (texts.includes(x.textContent)) {
                texts.splice(texts.indexOf(x.textContent), 1);
            }
        });

        expect(texts).toEqual([]);

    });


});


