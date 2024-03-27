import { render, screen } from "@testing-library/react";
import { statuses, linkNames } from "./index.js";
import App from "../src/App.jsx";

describe('Initial Load', () => {

  test('Title Renders on Load', () => {
    render(<App/>);
    const title = screen.getByText(/weary developer/i);
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

// // --------------------------------------NOTES--------------------------------------
// // Jest mock for an axios.get method. Better to use something like Mock Service Worker instead.

// import {jest} from '@jest/globals';

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