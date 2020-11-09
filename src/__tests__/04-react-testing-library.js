import React from 'react';
import { render } from '@testing-library/react'
import { FavoriteNumber } from '../favorite-number';

test('renders a number input with a label "Favorite Number"', () => {
  // 1. use react-testing-library to render and get helping queries it returns. read more: https://testing-library.com/docs/react-testing-library/api#render
  const div = document.createElement('div');
  const result = render(<FavoriteNumber />, div);

  // 2. use helper queries returned by render function to find the input element and make assertions
  expect(result.queryByLabelText('Favorite Number')).toHaveAttribute('type', 'number');
});
