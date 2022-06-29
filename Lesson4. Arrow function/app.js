// "=>"" not mean return
const sum = (a, b) => {
  return a + b;
};

//  "=>" mean return
const sum2 = (a, b) => a + b;

// ! return object
const sum3 = (a, b) => {
  return {
    a: a,
    b: b,
  };
};

const sum4 = (a, b) => ({ a: a, b: b });

//! -------------------------

// we can get rid of () if only one param
const logger = log => console.log(log)

console.log(sum(2, 2));
console.log(sum2(2, 2));
console.log(sum3(2, 2));
console.log(sum4(2, 2));


const course = {
    name: 'Javascript basic',
    getName: function(){
        return this //context
    }
}
// { name: 'Javascript basic', getName: [Function: getName] }

const course2 = {
    name: 'Javascript basic',
    getName: () =>{
        return this //no context
    }
}
// {}


console.log(course.getName())
console.log(course2.getName())

// ! -------------------------------

const Course = function(name,price){
    this.name= name;
    this.price=price;
}

const jsCourse = new Course('Javascript', 100000)

console.log(jsCourse)

// cant use arrow fn to make constructor function
// TypeError: Course2 is not a constructor
const Course2 = (name,price)=>{
    this.name= name;
    this.price=price;
}

const jsCourse2 = new Course2('Javascript', 100000)

console.log(jsCourse)
console.log(jsCourse2)