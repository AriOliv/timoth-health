# Timoth Medical AI Landing Page

A modern, multilingual, accessible landing page for Timoth Medical AI, built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in internationalization, accessibility, modular component design, and automated testing.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact & Support](#contact--support)

---

## Project Overview

Timoth Medical AI Landing Page is a production-quality, open-source web application designed to showcase Timoth’s medical AI solutions. The project emphasizes accessibility, internationalization (i18n), robust navigation, and maintainable code. It is suitable for both end-users and developers seeking a reference for best practices in React-based web development.

---

## Key Features

- **Multilingual Support:** English and Brazilian Portuguese, with easy extensibility for more languages.
- **Accessible Design:** ARIA-compliant navigation, keyboard support, and screen reader-friendly components.
- **Responsive UI:** Mobile-first layout using Tailwind CSS.
- **Modular Architecture:** Reusable, well-tested React components.
- **Dynamic Navigation:** Combined product dropdown, mobile menu, and smooth routing with React Router.
- **Internationalization (i18n):** Context-based language switching and translation management.
- **Automated Testing:** Unit and end-to-end tests with Jest, Testing Library, and Cypress.
- **Open Source:** MIT licensed and open for contributions.

---

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher recommended)
- Modern web browser (for development and preview)

---

## Installation

1. **Clone the repository**

   ```
   git clone https://github.com/your-org/timoth-medical-ai.git
   cd timoth-medical-ai
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start the development server**

   ```
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Usage

### Running the App

- **Development:**  
  ```
  npm run dev
  ```
- **Production Build:**  
  ```
  npm run build
  npm run preview
  ```

### Language Switching

- Use the language toggle button (flag icon) in the navigation bar to switch between English and Portuguese.
- All content updates instantly upon language change.

### Navigation

- Use the top navigation bar to access different sections and product dropdowns.
- The mobile menu is accessible on smaller screens.

### Example: Adding a New Language

1. Copy `src/i18n/en.ts` to a new file (e.g., `fr.ts` for French).
2. Translate all values.
3. Update `src/i18n/I18nContext.tsx` to include the new language.
4. Add the language option to the language toggle component.

---

## Configuration

### Environment Variables

No special environment variables are required for basic usage. For advanced configuration (e.g., analytics, API endpoints), add your variables to a `.env` file and reference them in your code as needed.

### Internationalization

- Translation files are located in `src/i18n/`.
- The current language is stored in `localStorage` and auto-detected on first visit.
- To add or update translations, edit the corresponding language file.

### Customization

- **Styling:** Modify or extend Tailwind CSS classes in component files or update `tailwind.config.js`.
- **Branding:** Update logo, colors, and content in the relevant components.
- **Navigation:** Edit `src/components/Navbar.tsx` and related files for menu structure.

---

## Contribution Guidelines

We welcome contributions! Please follow these steps:

1. **Fork the repository** and create your branch:
   ```
   git checkout -b feature/your-feature
   ```
2. **Write clear, maintainable code** and add/modify tests as needed.
3. **Ensure all tests pass**:
   ```
   npm run test
   npm run test:e2e
   ```
4. **Submit a pull request** with a clear description of your changes.

**Code Style:**  
- Use 2 spaces for indentation.
- Follow existing naming conventions.
- Write descriptive commit messages.

**Reporting Issues:**  
- Use the GitHub Issues tab to report bugs or request features.
- Provide as much detail as possible, including steps to reproduce.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact & Support

- **Project Maintainer:** [Your Name or Organization]
- **Email:** support@timoth.ai
- **GitHub Issues:** [https://github.com/your-org/timoth-medical-ai/issues](https://github.com/your-org/timoth-medical-ai/issues)

For questions, suggestions, or support, please open an issue or contact us by email.

---

_Thank you for contributing to Timoth Medical AI!_
