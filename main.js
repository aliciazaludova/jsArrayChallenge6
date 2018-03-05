console.log('hello');


// Challenge #6: Number Zoo Patrol
// You're working in a number zoo, and it seems that one of the numbers has gone missing! Given an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. displaythe number that is missing.

// Examples:

var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12

function missingNumber (arr) {
    var result;
    arr = arr.sort(function (a, b) {
      return a-b;
    });
    
    for (i = 1; i < arr.length; i++) {
      if (arr[0] !== 1) {
        result = 1;
        break;
      }
      if (arr[i] - arr[i - 1] !== 1) {
         result = arr[i] - 1; 
         break;
          }
    }
    
    return result; 
  }
  console.log(missingNumber(test1));
  console.log(missingNumber(test2));
  console.log(missingNumber(test3));
  
  // var testArr = [1,2,3,4,5,7,8,9,10];
  // if i = 1;
  
//   // 1st loop (i == 1)
//   testArr[i] == testArr[1];
//   testArr[i-1] -- testArr[0];
//    //2nd loop (i == 2)testArr[i] == testArr[2];
//   testArr[i-1] -- testArr[1];