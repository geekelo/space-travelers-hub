import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Myprofile from '../components/myprofile/myprofile';

const mockStore = configureMockStore();

describe('Myprofile Component', () => {
  it('renders reserved missions and active rockets', () => {
    const store = mockStore({
      rocket: {
        value: [
          { id: 1, name: 'Falcon 9', active: true },
          // Add more rocket data as needed for testing
        ],
      },
      missions: {
        missions: [
          { key: 1, missionTitle: 'Mission 1', reserved: true },
          // Add more mission data as needed for testing
        ],
      },
    });

    render(
      <Provider store={store}>
        <Myprofile />
      </Provider>,
    );

    const reservedMissionsText = screen.getByText('My Missions');
    const activeRocketsText = screen.getByText('My Rockets');

    expect(reservedMissionsText).toBeInTheDocument();
    expect(activeRocketsText).toBeInTheDocument();
  });

  // Add more tests as needed for specific behaviors of the Myprofile component
});
