export default function getIsExcluded({ storage }) {
  return ({ characterId, id }) => storage.getItem(`flgf_${characterId}_${id}_exclusion`) === 'X';
}