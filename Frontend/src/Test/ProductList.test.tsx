import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from '../Components/ProductList'; 
import { describe, it, expect, } from 'vitest';
import '@testing-library/jest-dom'; 

//testa och säkerställa en window.href relativt svårt
globalThis.window = Object.create(window);
let currentHref = ''; 

Object.defineProperty(window, 'location', {
  value: {
    get href() {
      return currentHref;
    },
    set href(value: string) {
      currentHref = value;  
    }
  },
  writable: true,
});

//json datan som den jämnför med
const Json = [
  {
    "name": "Naturtrogen julgran",
    "pris": 999,
    "beskrivning": "En klassisk plastjulgran som ser ut som riktig gran.",
    "kategori": "Julgranar",
    "id": "b0c1", 
    "amountInStorage": 50,
    "image": "https://images.pexels.com/photos/29488072/pexels-photo-29488072/free-photo-of-sno-dammade-julgranar-pa-natten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "name": "Vit julgran",
    "pris": 1199,
    "beskrivning": "Elegant vit plastgran för en modern jul.",
    "kategori": "Julgranar",
    "id": "5897", 
    "amountInStorage": 30,
    "image": "https://images.pexels.com/photos/6223464/pexels-photo-6223464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

describe('ProductList Component', () => {
  it('bör rendera ut json data på sidan', () => {
    render(<ProductList products={Json} />);

    //kolla så att name är rätt och finns på sidan
    expect(screen.getByText('Naturtrogen julgran')).toBeInTheDocument();
    expect(screen.getByText('Vit julgran')).toBeInTheDocument();

    // Kolla så att priserna syns rätt på sidan
    expect(screen.getByText("999 kr")).toBeInTheDocument();
    expect(screen.getByText("1199 kr")).toBeInTheDocument();
  });

  it('navigera till /produkt/:id', () => {
    render(<ProductList products={Json} />);

    // simulera ett klick på första bilden på sidan alltså med index 0
    const img = screen.getAllByRole('img')[0]; 
    fireEvent.click(img);

    // kolla så att min location href leder till rätt url då /product är förbestämt kollar vi endast så att rätt id hamnar efter
    expect(window.location.href).toBe('/product/b0c1');
  });
});

