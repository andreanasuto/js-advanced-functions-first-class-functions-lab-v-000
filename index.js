// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  const newarray = array.map(function (element) {
    console.log(element[0]);
    return element[0] && element[1]
  })
  return newarray
}
