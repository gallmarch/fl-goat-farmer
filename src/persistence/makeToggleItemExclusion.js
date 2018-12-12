import getIsExcluded from './getIsExcluded';
import makeItemKey from './makeItemKey';
import getCharacterId from '../auth/getCharacterId';

export default function makeToggleItemExclusion({ storage }) {
  const isExcluded = getIsExcluded({ storage });
  const characterId = getCharacterId();

  return function toggleItemExclusion(id) {
    /*
    const key = makeItemKey(id);
    if (isExcluded(id)) {
      storage.removeItem(key);
      return;
    }
    storage.setItem(key, 'X');
    */
  };
}