export default function makeItemKey(id) {
  const username = document.querySelector('.top-stripe__user-name').innerText;
  return `flgf_${username}_${id}_exclusion`;
}