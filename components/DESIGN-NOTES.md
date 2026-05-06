# Week 4: Component Architecture

## Components Used

- Header
- Footer
- Nav
- Card
- ThemeToggle
- ContactForm

## State Management

ThemeToggle uses useState and useEffect to manage dark mode and save the preference with localStorage.

ContactForm uses useState to manage user input.

## Client Components

- ThemeToggle
- ContactForm

These components require client-side interactivity and React hooks.

## Server Components

- Header
- Footer
- Nav
- Card

These components only display content and do not require state or browser APIs.

## Component Hierarchy

Home Page
- Header
- Nav
- Card
- Card
- Card
- ThemeToggle
- ContactForm
- Footer