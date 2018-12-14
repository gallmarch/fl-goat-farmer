import React from 'react';
import { shallow } from 'enzyme';
import { ExtensionUI } from '../ExtensionUI';

describe('ExtensionUI', () => {
  it('mounts without crashing', () => {
    shallow(<ExtensionUI
      dispatch={() => {}}
      liquidity={0}
      storage={{}}
      target={0}
    />);
  });
});