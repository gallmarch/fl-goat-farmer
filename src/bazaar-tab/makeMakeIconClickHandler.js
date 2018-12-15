import isSellingMyThings from '../sticky-menu/isSellingMyThings';

// TODO: this is a terrible name.
export default function makeMakeIconClickHandler() {
  return el => () => {
    // If we're not selling our things, do nothing
    if (!isSellingMyThings()) {
      return;
    }

    // Toggle the display class
    el.classList.toggle('flgf--disabled');
  };
}
