*arraysOfNumbers*

var maxNumber = [1,2,3,4,0]
var minNumber = [1,5,-3,10,7]
var closeNumber = [20, .005, .001, -90, 1]
var sumNumber = [15, 55, 70, -90, 1]
var sum = 0
var mean
var max = maxNumber[0]
var min = minNumber[0]
var close = closeNumber[0]


maxNumber.forEach(function(el){
  if(el > max) {
    max = el
  }
})

minNumber.forEach(function(el){
  if(el < min) {
    min = el
  }
})

closeNumber.forEach(function(el){
  if(Math.abs(el) < Math.abs(close)){
    close = el
  }
})

sumNumber.forEach(function(el){
  sum += el
})

sumNumber.forEach(function(el){
  mean = sum / sumNumber.length
})

var maxIndex = maxNumber.indexOf(max)


*arraysOfStrings*

var siblingNames = ['Sister', 'Brother']
var parentNames = ['Mom', 'Dad']
var combinedNames = siblingNames.concat(parentNames)

siblingNames.sort()
parentNames.sort()
siblingNames.reverse()
parentNames.reverse()
combinedNames.sort()

function isNamed(name){
  return name == 'Dad'
 }


*advancedFunctions*

var evenElements = [1,2,3,4,5,6]
var oddElements = [1,2,3,4,5,6]

function isEven(array){
  return (array % 2 == 0)
}

evenElements.filter(isEven)

function isOdd(array){
  return !(array % 2 == 0)
}

oddElements.filter(isOdd)


var array = [5,6]

//creating a function called mapArray that takes array and function as arguments
//function mapArray(arr, fun){

  //create an empty return array
  var returnArray = []

  arr.forEach(function(el) {
    returnArray.push(fun(el))
  })
  return returnArray
}

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 7]

mapArray([5, 6], function(el) { return 2*el }) //=> [10,12]

var filterArray = [5,6,7]
function x(y){ return y >= 6} filterArray.filter(x)
