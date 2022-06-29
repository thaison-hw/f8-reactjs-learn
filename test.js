// ! EX8: Grouping objects by a property
// Nhóm theo property
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    // console.log(key);
    // 21
    // 20
    // 20
    // console.log(acc)
    // {}
    // { '21': [ { name: 'Alice', age: 21 } ] }
    // {
    //   '20': [ { name: 'Max', age: 20 } ],
    //   '21': [ { name: 'Alice', age: 21 } ]
// }
    if (!acc[key]) {
      acc[key] = []; //
    }
    // console.log(acc[key]);
    // []
    // []
    // [ { name: 'Max', age: 20 } ]
    acc[key].push(obj);
    // console.log(acc[key])
    // console.log(obj)
    // [ { name: 'Alice', age: 21 } ]
    // [ { name: 'Max', age: 20 } ]
    // [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ]: 20 } ]
    // console.log(acc)
    return acc;
    // { '21': [ { name: 'Alice', age: 21 } ] }      
    // {
    //   '20': [ { name: 'Max', age: 20 } ],
    //   '21': [ { name: 'Alice', age: 21 } ]        
    // }
    // {
    //   '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],  '21': [ { name: 'Alice', age: 21 } ]        
    // }
      }, {});
    }

let groupedPeople = groupBy(people, "age");
// {
//     '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],  '21': [ { name: 'Alice', age: 21 } ]        
//   }

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
  // console.log(allbooks)


// ! EX10: Remove duplicate items in an array

// TODO Note: If you are using an environment compatible with Set and Array.from(), you could use let arrayWithNoDuplicates = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

// console.log(myArrayWithNoDuplicates)
// [ 'a', 'b', 'c', 'e', 'd' ]


const FRUITS = ["banana", "apple", "orange", "banana", "orange", "apple", "apple", "orange", "orange", "banana", "orange", "banana"]

const total = FRUITS.reduce((map, fruit) => ({
  ...map,
  [fruit]: (map[fruit] || 0) + 1,
}
), {})

console.log(total) // { banana: 4, apple: 3, orange: 5}
