import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rocket from '../components/rocket/rocket';

const mockStore = configureMockStore();
const initialState = {
  rocket: {
    value: [
      {
        id: 1,
        name: 'Falcon 1',
        description: 'Description for Falcon 1',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        active: false,
      },
      // ... Add more rockets as needed for testing
    ],
    status: 'done',
    error: false,
  },
};
const store = mockStore(initialState);

describe('Rocket Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );

    // Take a snapshot of the rendered output
    expect(container).toMatchSnapshot();
  });
});
