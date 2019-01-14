import { parseFloatAndClamp } from '../insertExtensionUI';

describe('parseFloatAndClamp', () => {
  it('returns the target, if valid', () => {
    expect(parseFloatAndClamp('20')).toEqual(20);
    expect(parseFloatAndClamp('20.25')).toEqual(20.25);
  });
  it('ensures the target is non-negative', () => {
    expect(parseFloatAndClamp(-1)).toEqual(0);
    expect(parseFloatAndClamp(-0)).toEqual(0);
  });
  it('coerces NaN to 0', () => {
    expect(parseFloatAndClamp('foo')).toEqual(0);
  });
});