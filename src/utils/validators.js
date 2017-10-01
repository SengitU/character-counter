const isNullOrUndefined = (value) => value === null || value === undefined;

/**
 * @function alphaNumeric
 * @param {String} String to be evaluated
 * @returns {Boolean} returns true if given input is alphanumeric, false otherwise
 */
export const alphaNumeric = (value) => {
  return !isNullOrUndefined(value) && (!value.length || (new RegExp('^[a-zA-Z0-9]*$')).test(value));
}