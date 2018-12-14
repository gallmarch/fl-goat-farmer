/**
 * Check the DOM to see whether we have a sticky menu, and,
 * if so, whether the active item is called "Sell my things";
 */
export default function isSellingMyThings() {
  if (!document.querySelector('.nav--stacked')) {
    return false;
  }
  const activeItem = document.querySelector('.menu-item--active');
  if (!activeItem) {
    return false;
  }
  return activeItem.innerText === 'Sell my things';
}