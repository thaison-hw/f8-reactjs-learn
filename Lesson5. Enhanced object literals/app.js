// ! 1. Định nghĩa key: value cho object
// ! 2. Định nghĩa method cho object
// ! 3. ĐỊnh nghĩa key cho object dưới dạng biến

// ! 1. Định nghĩa key: value cho object
var name = 'javascript'
var price = 1000

var course ={
    name: name,
    price: price
}
// If key and value the same
var course2 ={
    name,
    price
}

console.log(course)
console.log(course2)
// { name: 'javascript', price: 1000 }

// ! 2. Định nghĩa method cho object
var course3 ={
    name,
    price,
    getName : function(){
        return name;
    }
}

// we can get rid of "function"
var course4 ={
    name,
    price,
    getName(){
        return name;
    }
}

console.log(course3.getName()) //javascript
console.log(course4.getName()) //javascript

// ! 3. ĐỊnh nghĩa key cho object dưới dạng biến
// lấy value của biến gán vào key
var fieldName = 'name'
var fieldPrice = 'price'

const course5 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course5)
// { name: 'Javascript', price: 1000 }