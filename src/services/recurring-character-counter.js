/**
 * @function recurringCharacterCounter
 * @param {String} String to be evaluated
 * @returns {Promise} returns a promise that resolves number of duplicates
 */
export const recurringCharacterCounter = (word='') => {
  return new Promise((resolve) => {
    const arr = word.split('');
    const dataMap = {};
    let duplicates = 0;

    arr.forEach(item => {
      let itemCount = dataMap[item];
      if(!itemCount) {
        dataMap[item] = 1;
      } else if (itemCount === 1) {
        /*
         * We might remove the item from the array right now, since we will not accounting item for the next iterations
         * By this way we will be able to resolve the problem with using an array instead of dataMap object.
         * But I believe that modifying the array we are currently iterating is anti pattern.
         */
        dataMap[item]++;
        duplicates++;
      }
    });
    resolve(duplicates);
  })
}