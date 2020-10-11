// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import Home from './Home';


test('renders Home', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Home/i);
    expect(element).toBeInTheDocument();
});
