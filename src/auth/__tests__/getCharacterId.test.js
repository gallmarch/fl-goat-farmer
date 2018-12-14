import jwt from 'jsonwebtoken';
import getCharacterId from '../getCharacterId';

describe('getCharacterId', () => {
  it('finds a character ID in the JWT', () => {
    const characterId = 90;
    const token = jwt.sign({ CharacterId: characterId }, 'be-sure-to-drink-your-ovaltine');
    expect(getCharacterId(token)).toBe(90);
  });
  it('works if the token is camelcased', () => {
    const characterId = 90;
    const token = jwt.sign({ characterId }, 'be-sure-to-drink-your-ovaltine');
    expect(getCharacterId(token)).toBe(90);
  });
  it('returns null if the JWT is garbage', () => {
    const token = 'some-garbage-value';
    expect(getCharacterId(token)).toBe(null);
  });
  it('returns null if the key we\'re looking for isn\'t there', () => {
    const token = jwt.sign({}, 'be-sure-to-drink-your-ovaltine');
    expect(getCharacterId(token)).toBe(null);
  });
});