import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
	const { getByText } = render(<App />);
	const headerElement = getByText("Recruitment");
	expect(headerElement).toBeInTheDocument();
});

test('renders copyright message for the current year', () => {
	const { getByText } = render(<App />);
	const copyrightElement = getByText("Ruaidhri MacKenzie © " + new Date().getFullYear());
  expect(copyrightElement).toBeInTheDocument();
});
