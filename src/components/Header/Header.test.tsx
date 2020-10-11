// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import Header from './Header';


test('renders App with React', () => {
    const { getByText } = render(<Header />);
    const element = getByText(/App with React/i);
    expect(element).toBeInTheDocument();
});
