// 1. the follwing imports will be all you need in this exercise, uncomment to activate them!
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 2. create a div using DOM's createElement API as root for React component to be mounted
    const rootElement =  document.createElement("div");
  // 3. render the FavoriteNumber component to that div using ReactDOM.render.
    ReactDOM.render(<FavoriteNumber />, rootElement);
  // 4. find the input element using DOM's querySelector API and assert the input type attribute is `number`
    expect(rootElement.querySelector('#favorite-number').type).toBe('number')
  // 5. find the label element using DOM's querySelector API and assert its text content is "Favorite Number"
    expect(rootElement.querySelector('label').textContent).toBe('Favorite Number')
});
