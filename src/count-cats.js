const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
 function countCats( matrix ) {
  let Array = matrix.flat(Infinity)
  let newArray = Array.filter(function (element) {
      return  (element == '^^');
    })
  if (newArray.length > 0) {
      return newArray.length;
  }
  else {
      return 0;
  }
    }
}

module.exports = {
  countCats
};
