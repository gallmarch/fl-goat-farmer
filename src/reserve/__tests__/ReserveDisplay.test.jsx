import React from 'react';
import { shallow } from 'enzyme';

import { ReserveDisplay } from '../ReserveDisplay';

describe('ReserveDisplay', () => {
  it('mounts without crashing', () => {
    shallow(<ReserveDisplay reserveLevel={0} />);
  });
});