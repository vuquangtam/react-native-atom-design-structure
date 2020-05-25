import React from 'react';
import renderer from 'react-test-renderer';

import Dumb from './dumb.component';

describe('<Dumb />', () => {
  it('renders without crashing', () => {
    const comp = renderer.create(<Dumb />);
    expect(comp).toBeDefined();
  });
});
