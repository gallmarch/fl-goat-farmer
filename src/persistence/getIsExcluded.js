/**
 * Return a function ({ characterId, id }) => bool that tells
 * us whether an item type is excluded for a given character in
 * storage.
 * @param {Object} param0
 */
export default function getIsExcluded({ storage }) {
  return ({ characterId, id }) => storage.getItem(`flgf_${characterId}_${id}_exclusion`) === 'X';
}