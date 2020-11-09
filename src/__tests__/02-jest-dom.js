// 🌟https://github.com/testing-library/jest-dom
// 🌟Note that you won't be needing to import 'jest-dom' by yourself in this exercise, it's been already setup.
import React from 'react';
import ReactDOM from 'react-dom';
import { FavoriteNumber } from '../favorite-number';

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  // 1. assert the input type attribute is `number` by using jest-dom's toHaveAttribute API
  expect(div.querySelector('input')).toHaveAttribute('type', 'number');
  // 2. assert the label text content is "Favorite Number" by using jest-dom's toHaveTextContent API
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
