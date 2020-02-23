
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if(typeof(matrix) === "undefined") {
    return arr
  }
  for(let i = 0; i < matrix.length; i++){
    if( i % 2 !== 0) {
       Array.prototype.push.apply(arr, matrix[i].reverse())
    }else{
      Array.prototype.push.apply(arr, matrix[i])
    }
  }
  return arr
}
