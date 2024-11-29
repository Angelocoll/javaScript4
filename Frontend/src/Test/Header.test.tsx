import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { describe, it, expect } from 'vitest';
import { Header } from '../Components/Header';

describe('Footer component', () => {
  it('renders all the correct text', () => {
    render(<Header />);
//kolla om det finns en text som har denna value i documentet
    expect(screen.getByText('Rudolfs')).toBeInTheDocument();
  });
});