import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";

describe('Dark/Light Mode', () => {

  test('Switching Between Dark and Light Mode', async () => {
    render(<App/>);
    const user = userEvent.setup();
    // Simulating a user clicking on the lighting mode button to change it to dark mode.
    await user.click(screen.getByRole('img', { name: /dark mode/i }));

    // document.documentElement refers to where the --background-color property is being applied in App.jsx.
    const darkStyling = getComputedStyle(document.documentElement);
    expect(darkStyling.getPropertyValue('--background-color')).toBe('#2B322E');

    // Simulating a second click event where the 'user' switches the app back to light mode.
    await user.click(screen.getByRole('img', { name: /light mode/i }));

    const lightStyling = getComputedStyle(document.documentElement);
    expect(lightStyling.getPropertyValue('--background-color')).toBe('#ECDADA');
  });

  test('Man Image Gets Sunglasses', async () => {
    render(<App/>);
    const user = userEvent.setup();
    await user.click(screen.getByRole('img', { name: /dark mode/i }));

    const image = screen.getByRole('img', { name: /cool man/i });
    expect(image).toBeInTheDocument();
  });

});