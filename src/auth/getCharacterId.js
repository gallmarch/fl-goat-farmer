import jwt from 'jsonwebtoken';

export default function getCharacterId(token) {
  try {
    const { CharacterId, characterId } = jwt.decode(token);
    return CharacterId || characterId || null;
  } catch (error) {
    return null;
  }
}
