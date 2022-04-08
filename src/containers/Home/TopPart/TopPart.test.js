import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../../data/ThemeConfig.jsx';
import TopPart from './TopPart.jsx';


describe('<TopPart />', () => {

    let component;

    // emulate onSubmit function
    const onSubmit = jest.fn();

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <TopPart onSubmit={onSubmit}/>
            </ThemeProvider> 
            );
    })

    // 1. The TopPart renders correctly
    test('The TopPart renders correctly', () => {
        component.container.querySelector("button")
    });

    // 2. on empty form if the button is clicked onSubmit is not called and warning message is shown
    test('Send empty form', () => {
        fireEvent.click(component.getByText("Buscar"));
        expect(component.container.querySelector("div[id='alert']")).toBeInTheDocument();
        expect(onSubmit).not.toHaveBeenCalled();
    });

    // 3. on filled form if the button is clicked onSubmit is called
    test('Send filled form', () => {
        fireEvent.change(component.getByLabelText("Ciudad *"), { target: { value: "Baradero" } });
        fireEvent.click(component.getByTitle("Open"));
        fireEvent.click(component.getByTitle("AD"));

        fireEvent.click(component.getByText("Buscar"));

        expect(onSubmit).toHaveBeenCalled();
    });


});
