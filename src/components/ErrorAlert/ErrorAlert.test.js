import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ErrorAlert from './ErrorAlert.jsx';

test('The ErrorAlert renders correctly', () => {
    const component = render(<ErrorAlert open={true} setOpen={()=>{}} severity="error" message="testMessage" />);
    component.getByText("testMessage");

});