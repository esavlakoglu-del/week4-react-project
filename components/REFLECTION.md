# Week 4 Refactor Reflection

Moving from vanilla JavaScript to React changed the way I structured my website. In the vanilla JavaScript version, I would normally use DOM selectors, event listeners, and class changes to make the page interactive. In the React version, I separated the page into reusable components such as Header, Footer, Nav, Card, ThemeToggle, and ContactForm. This made the project more organized because each component had one clear responsibility.

I placed state inside the components that needed interactivity. For example, ThemeToggle uses useState to track whether dark mode is on or off, and it uses useEffect with localStorage to save the user’s theme preference. ContactForm also uses useState to track what the user types in the input field. This placement made sense because the state belonged directly to those interactive components instead of the entire page.

One benefit of React is that the user interface updates automatically when state changes. I did not need to manually update the DOM every time the user clicked a button or typed in the form. However, React also makes some things more complicated than vanilla JavaScript. For a very small website, using components, hooks, and project setup can feel like extra work. I would explain this trade-off to a non-technical stakeholder by saying that React may take more setup at first, but it makes the website easier to maintain and expand later.

According to the React documentation, components allow developers to split the user interface into independent and reusable pieces, which supports better organization in larger applications (React, 2024).

## Reference

React. (2024). Your first component. React. https://react.dev/learn/your-first-component
