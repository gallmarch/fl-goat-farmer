import isSellingMyThings from '../../sticky-menu/isSellingMyThings';
import makeMakeIconClickHandler from '../makeMakeIconClickHandler';

jest.mock('../../sticky-menu/isSellingMyThings');

describe('makeMakeIconClickHandler', () => {
  it('returns a function', () => {
    expect(makeMakeIconClickHandler({})).toBeInstanceOf(Function);
  });
});

describe('makeIconClickHandler', () => {
  it('returns a function', () => {
    const makeIconClickHandler = makeMakeIconClickHandler({});
    expect(makeIconClickHandler()).toBeInstanceOf(Function);
  });
});

describe('iconClickHandler', () => {
  let dispatch;
  let el;
  let handler;
  let store;
  let toggle;

  beforeEach(() => {
    dispatch = jest.fn();
    toggle = jest.fn();
    store = { dispatch };
    el = {
      classList: { toggle },
      getAttribute: jest.fn(() => 65536),
    };
    handler = makeMakeIconClickHandler({ store })(el);
  });

  it('dispatches an action if we\'re selling things', () => {
    isSellingMyThings.mockImplementation(() => true);
    handler();
    expect(dispatch).toHaveBeenCalled();
  });

  it('doesn\'t dispatch an action if we aren\'t selling things', () => {
    isSellingMyThings.mockImplementation(() => false);
    handler();
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('toggles `.flgf--disabled` if we\'re selling things', () => {
    isSellingMyThings.mockImplementation(() => true);
    handler();
    expect(toggle).toHaveBeenCalledWith('flgf--disabled');
  });

  it('doesn\'t toggle `.flgf--disabled` if we\'re selling things', () => {
    isSellingMyThings.mockImplementation(() => false);
    handler();
    expect(toggle).not.toHaveBeenCalled();
  });
});