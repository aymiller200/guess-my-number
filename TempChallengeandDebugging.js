//Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error:

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understanding the problem.
// - What is temp amplitude? Answer: difference between highest and lowest numbers in the array.
// - How to compute max and min temperatures.
// - What's a sensor error, and what to do when it occurs?

//2) Break up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array
// - find min value
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]

    if (typeof curTemp !== 'number') continue //continue keyword means that the rest of iteration will not be executed.

    if (curTemp > max) max = curTemp

    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)

//Function should now receive two arrays of temperatures

// 1) Understanding the problem.
// -with 2 arrays, do we need to implement the same functionality twice? NO! Just merge two arrays at the beggining

//2) Break up into sub-problems.
// - Merge 2 arrays?
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2)

  let max = temps[0]
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]

    if (typeof curTemp !== 'number') continue //continue keyword means that the rest of iteration will not be executed.

    if (curTemp > max) max = curTemp

    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 10])
console.log(amplitude)

////////////////////////////////////////////////////////////////////////////////////////
//!DEBUGGING

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    //C) Fix the bug
    value: Number(prompt('Degrees Celcius')),
    //value: prompt('Degrees celsius:'),
  }
  // B Find the bug
  console.table(measurment)

  console.log(measurment.value)
  const kelvin = measurment.value + 273
  return kelvin
}
//A) Identify the bug
console.log(measureKelvin())

////////////////////////////////////////////////////////////////////////////////////////
/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17 C in 1 days ... 21 C in 2 days ... 23 C in 3 days ..."
Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:

 Data 1: [17, 21, 23]
 Data2:[12,5,-5,0,4]

*/

// 1) Understanding the problem.
//  -Array transformed to string, separated by ...
//  -What is the X days? Answer: index + 1

//2) Breaking up into sub-problems:
// - Transform array into a string.
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const printForecast = (arr) => {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days...`
  }
  console.log('...' + str)
}

printForecast([12, 13, 10])
printForecast([12, 5, -5, 0, 4])
