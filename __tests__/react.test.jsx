import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { statuses, linkNames } from "./index.js";
import App from "../src/App.jsx";

describe('Initial Load', () => {

  test('Title Renders on Load', () => {
    render(<App/>);
    const title = screen.getByText(/weary developer/i)
    expect(title).toBeInTheDocument();
  });

  test('Image Renders on Load', () => {
    render(<App/>);
    const image = screen.getByRole('img', { name: /^man$/i });
    expect(image).toBeInTheDocument();
  });

  test('Buttons Render on Load', () => {
    render(<App/>);
    // statuses refers to an array of the button names.
    for (const el of statuses) {
      // For each element, create a regex object that replaces whitespace with a regex representation for whitespace.
      const regex = new RegExp(el.replace(' ', '\\s*'), 'i');
      const button = screen.getByRole('button', { name: regex });
      expect(button).toBeInTheDocument();
    };
  });

  test('Nav-Link Images Render on Load', () => {
    render(<App/>);
    // linkNames refers to an array of the alt labels for the div home__buttons--icons.
    for (const el of linkNames) {
      const regex = new RegExp(el, 'i');
      const image = screen.getByRole('img', { name: regex });
      expect(image).toBeInTheDocument();
    };
  });

});

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

    const image = screen.getByRole('img', { name: /cool man/i })
    expect(image).toBeInTheDocument();
  })

});

// // JEST MOCK EXAMPLES
// import {jest} from '@jest/globals';

// // Jest mock for an axios.get method.
// jest.unstable_mockModule('axios', () => {
//   return {
//     default: {
//       get: jest.fn().mockResolvedValue({
//         data: {
//           message: 'Not Found',
//           status: 404,
//         },
//       }),
//     },
//   };
// });