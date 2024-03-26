import { render, screen } from '@testing-library/react';
import Modal from '../src/components/modal/Modal.jsx';

describe('Testing React', () => {

  test('Renders Initial Text', () => {
    render(<Modal/>);
    expect(screen.getByText('Placeholder')).toBeInTheDocument();
    // expect(true).toBe(true);
  });

});