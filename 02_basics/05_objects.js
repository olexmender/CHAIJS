//this is called destructuring in javascript
const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"sameer",
}

// console.log(course.courseInstructor);

// const {courseInstructor}=course;   

// console.log(courseInstructor);

const {courseInstructor:instructor}=course; //we can also short the name

console.log(instructor);

//json

// {
//     "name":"sameer",
//     "age":24,
//     "email":"sameer@gmail.com",
// }

// [
//     {},
//     {},
//     {},
// ]