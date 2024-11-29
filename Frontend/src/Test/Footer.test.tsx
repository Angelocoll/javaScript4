import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { describe, it, expect } from 'vitest';
import { Footer } from '../Components/Footer';

//börja med en simpel komponent och sedan bygg upp svårare tester

describe('Footer component', () => {
  it('renders all the correct text', () => {
    render(<Footer />);
//kolla om det finns en text som har denna value i documentet
    expect(screen.getByText('Sponsered by: Telecom')).toBeInTheDocument();
    expect(screen.getByText('Copyright: Rudolf 2022')).toBeInTheDocument();
    expect(screen.getByText('Merry Christmas')).toBeInTheDocument();
  });
});
