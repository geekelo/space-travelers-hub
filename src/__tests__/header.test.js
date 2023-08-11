import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
