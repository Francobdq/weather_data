import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Load from './Load.jsx';


test('The Load screen renders correctly', () => {
    const component = render(<Load  />);
    component.getByAltText("loading");
});