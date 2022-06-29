//! Arrow function
reduce((previousValue, currentValue, currentIndex, array) => {
  /* ... */
}, initialValue);

//! Callback function
reduce(callbackFn);
reduce(callbackFn, initialValue);

//! Inline callback function
reduce(function (previousValue, currentValue, currentIndex, array) {
  /* ... */
}, initialValue);

//! callbackFn
// A "reducer" function.

// The function is called with the following arguments:

//? previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

//? currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

//? currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

//? array: the array to traverse.

//? initialValue Optional

//! Return value
//! The value that results from running the "reducer" callback function to completion over the entire array.

//TODO If elements are appended to the array after reduce() begins to iterate over the array, the callback function does not iterate over the appended elements.

//TODO If existing elements of the array do get changed, the values passed to the callback function will be the values from the time that reduce() was first called on the array.
//TODO Array elements that are deleted after the call to reduce() begins and before being iterated over are not visited by reduce().

// *Edge cases
//* If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

//* If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

//* If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

// ! EX1: Edge cases
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError

// ! EX2: How reduce() works without an initial value

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// callback iteration	preVal	currenVal	currIndex	array	                return value
// first call	        15	    16	        1	        [15, 16, 17, 18, 19]	31
// second call	        31	    17	        2	        [15, 16, 17, 18, 19]	48
// third call	        48	    18	        3	        [15, 16, 17, 18, 19]	66
// fourth call	        66	    19	        4	        [15, 16, 17, 18, 19]	85

//The value returned by reduce() would be that of the last callback invocation (85).

// ! EX3: How reduce() works with an initial value

[15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue, currentIndex, array) =>
    previousValue + currentValue,
  10
);

// callback iteration	preVal	currenVal	currIndex	    array	                return value
// first call	            10	    15	        0	        [15, 16, 17, 18, 19]	25
// second call	            25	    16	        1	        [15, 16, 17, 18, 19]	41
// third call	            41	    17	        2	        [15, 16, 17, 18, 19]	58
// fourth call	            58	    18	        3	        [15, 16, 17, 18, 19]	76
// fifth call	            76	    19          4	        [15, 16, 17, 18, 19]	95

//The value returned by reduce() in this case would be 95.

// ! EX4: Sum all the values of an array

let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
// sum is 6

//Alternatively written with an arrow function:

let total = [0, 1, 2, 3].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

// ! EX5: Sum of values in an object array

let initialValue = 0
let sum2 = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum2) // logs 6

// Alternatively written with an arrow function:

let initialValue1 = 0
let sum3 = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue1
)

console.log(sum3) // logs 6

// ! EX6: Flatten an array of arrays

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
  )
  // flattened is [0, 1, 2, 3, 4, 5]

//Alternatively written with an arrow function:

let flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)

// ! EX7: Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// ! EX8: Grouping objects by a property 
// Nhóm theo property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      console.log('key:', key)
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people, 'age')
  // groupedPeople is:
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }

//1. Tạo hàm groupBy nhận 2 tham số (objectArray, property)
//2. tạo hàm objectArray.reduce nhận 2 tham số (acc, obj) 
//3. tạo biến key gán với giá trị của obj[property], trường hợp này là obj[age] -> 21, 20, 20
// 4. Viết logic nếu không có acc[key] trả về acc[key]=[]  ->/ key: [] key: [] key: [ { name: 'Max', age: 20 } ]
// 5. Nếu có key = obj[property khai báo như age] thì push mảng hiện tại vào mảng trước đó là acc
// 6. Trả về acc là object có key trùng với property ta cần group, còn lại là obj được push vào.

//! EX9: Bonding arrays contained in an array of objects using the spread operator and initialValue

// Liên kết các mảng chứa trong một mảng đối tượng bằng cách sử dụng toán tử spread và initialValue

// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])
  
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

//   ! EX10: Remove duplicate items in an array

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

// console.log(myArrayWithNoDuplicates)
// [ 'a', 'b', 'c', 'e', 'd' ]




