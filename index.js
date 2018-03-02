// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  const newarray = [array[0], array[1]]
  return newarray
}

const returnLastTwoDrivers = function (array) {
  const newarray = [array[array.length - 2], array[array.length - 1]]
  return newarray
}

const selectingDrivers = function (array) {
  console.log(returnFirstTwoDrivers());
  const newarray = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
  console.log(returnFirstTwoDrivers);
  return newarray
}
