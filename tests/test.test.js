import {jest} from '@jest/globals';

// Jest mock for Axios Call
jest.unstable_mockModule('axios', () => {
  return {
    default: {
      get: jest.fn().mockResolvedValue({
        data: {
          user: [{fName: 'Eric', lName: 'Hoffman',}],
        },
      }),
    },
  };
});

//test for checking state on button click