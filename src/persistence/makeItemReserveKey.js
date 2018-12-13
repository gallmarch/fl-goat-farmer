/**
 * Create a key for this quality and this character ID to mark
 * it in localStorage as excluded from the total.
 * @param {Object} param0
 */
export default function makeItemExclusionKey({ characterId, id }) {
  return `flgf_${characterId}_${id}_exclusion`;
}