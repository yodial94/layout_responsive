/**
 * Sort an array in ascending order.
 * Delete null values before output.
 * @param {number[]} array
 * @return {number[]}
 */
 function bubbleSort (array) {
    var count = 0
    var length = array.length
  
    // traverse the array (length of array) times
    while (count !== length) {
      for (var i = length; i > count; i--) {
        var current = array[i]
        var left = array[i - 1]
  
        // delete element if value is null
        if (current === null) {
          array.splice(i, 1)
          continue
        }
  
        // swap
        if (left !== undefined && left > current) {
          array[i - 1] = current
          array[i] = left
        }
      }
      count++
    }
    return array
  }
  
  // test with positive numbers only
  console.log(bubbleSort([109, 90, 44, 39, 4, 24, 2, 0, 10]))
  // => [ 0, 2, 4, 10, 24, 39, 44, 90, 109 ]
  
  // test with negative numbers
  console.log(bubbleSort([10, 9, 8, 7, 6, 4, 5, 3, 2, 1, 0, -1, -3, -2]))
  // => [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  
  // test with null values
  console.log(bubbleSort([3, 8, 1, 33, 0, null, 2, 7, 3, null, 4, 6]))
  // => [ 0, 1, 2, 3, 3, 4, 6, 7, 8, 33 ]