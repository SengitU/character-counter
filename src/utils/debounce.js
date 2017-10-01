/**
 * @function debounce
 * @param {Function} function to be execute after debounce
 * @param {Number} delay duration for debeounce, 500ms by default
 * @returns {String} a new function that scoped given function and delay duration
 */
export function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
