import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { I18nProvider } from '../../i18n/I18nContext';

const renderNavbar = () => {
  render(
    <BrowserRouter>
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    </BrowserRouter>
  );
};

describe('Navbar', () => {
  test('renders brand logo and name', () => {
    renderNavbar();
    const brandElement = screen.getByText('Timoth');
    expect(brandElement).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    renderNavbar();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders products dropdown', () => {
    renderNavbar();
    const productsDropdown = screen.getByText('Products');
    expect(productsDropdown).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    renderNavbar();
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    expect(screen.getByText('ECG Analysis')).toBeInTheDocument();
    expect(screen.getByText('Endometriosis Insights')).toBeInTheDocument();
  });

  test('closes mobile menu when clicking outside', () => {
    renderNavbar();
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    fireEvent.click(document.body);
    expect(screen.queryByText('ECG Analysis')).not.toBeInTheDocument();
  });
});
