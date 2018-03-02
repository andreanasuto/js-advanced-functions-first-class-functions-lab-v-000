// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  array.map(function (element) {
    return element[0] && element[1]
  })
}
