import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe('Initial Load', () => {
  test("Page Loads as Expected", () => {
    render(<App/>);
    expect(screen.getByText('200 OK')).toBeInTheDocument();
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