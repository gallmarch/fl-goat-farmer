export default function getIsExcluded({ storage }) {
  const username = document.querySelector('.top-stripe__user-name').innerText;
  return id => storage.getItem(`flgf_${username}_${id}_exclusion`) === 'X';
}