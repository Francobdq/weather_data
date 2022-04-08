import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../data/ThemeConfig.jsx';
import Card from './Card.jsx';




describe('<Card />', () => {
    let component;
    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <Card title="testTextCard" content={<div>testContentCard</div>} />
            </ThemeProvider>
            );
        
    })

    // 1. The Card renders correctly
    test('The Card renders correctly', () => {
        component.getByText("testTextCard");
    });

    // 2. The Card renders the correct content
    test('The table renders the correct content', () => {
        component.getByText("testContentCard");
    });


});
