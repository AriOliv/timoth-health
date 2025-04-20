import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductsDropdown from '../ProductsDropdown';
import { I18nProvider } from '../../i18n/I18nContext';

const renderProductsDropdown = () => {
  render(
    <BrowserRouter>
      <I18nProvider>
        <ProductsDropdown />
      </I18nProvider>
    </BrowserRouter>
  );
};

describe('ProductsDropdown', () => {
  test('renders products button', () => {
    renderProductsDropdown();
    const productsButton = screen.getByText('Products');
    expect(productsButton).toBeInTheDocument();
  });

  test('opens dropdown on click', () => {
    renderProductsDropdown();
    const productsButton = screen.getByText('Products');
    fireEvent.click(productsButton);
    expect(screen.getByText('ECG Analysis')).toBeInTheDocument();
    expect(screen.getByText('Endometriosis Insights')).toBeInTheDocument();
  });

  test('closes dropdown when clicking outside', () => {
    renderProductsDropdown();
    const productsButton = screen.getByText('Products');
    fireEvent.click(productsButton);
    fireEvent.click(document.body);
    expect(screen.queryByText('ECG Analysis')).not.toBeInTheDocument();
  });

  test('navigates to correct route when product is clicked', () => {
    renderProductsDropdown();
    const productsButton = screen.getByText('Products');
    fireEvent.click(productsButton);
    const ecgLink = screen.getByText('ECG Analysis');
    fireEvent.click(ecgLink);
    expect(window.location.pathname).toBe('/ecg');
  });
});
