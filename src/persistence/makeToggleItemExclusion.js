import getIsExcluded from './getIsExcluded';
import makeItemExclusionKey from './makeItemExclusionKey';
import getCharacterId from '../auth/getCharacterId';

/**
 * Return a function ({ id, characterId }) that toggles an
 * item's exclusion from the total in storage.
 * @param {Object} param0
 */
export default function makeToggleItemExclusion({ storage }) {
  const isExcluded = getIsExcluded({ storage });
  const characterId = getCharacterId();

  return function toggleItemExclusion(id) {
    const key = makeItemExclusionKey({ id, characterId });
    if (isExcluded({ characterId, id })) {
      storage.removeItem(key);
      return;
    }
    storage.setItem(key, 'X');
  };
}