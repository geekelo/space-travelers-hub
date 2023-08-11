import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../components/missions';

const mockStore = configureMockStore();
const initialState = {
  missions: {
    missions: [
      {
        key: '1',
        missionId: '1',
        mission: 'Today rescue',
        description: 'Interesting',
        reserved: true,
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
        <Missions />
      </Provider>,
    );

    // Take a snapshot of the rendered output
    expect(container).toMatchSnapshot();
  });
});
