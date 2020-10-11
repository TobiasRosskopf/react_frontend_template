// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import Footer from './Footer';


test('renders Footer', () => {
    const { getByText } = render(<Footer />);
    const element = getByText(/Footer/i);
    expect(element).toBeInTheDocument();
});
