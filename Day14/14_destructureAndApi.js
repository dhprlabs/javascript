/*
Here, we will learn about destructuring of objects.
It means to pull out the key value pair and store it in a variable to avoid repetation.
This destructing is widely use in reactjs components.

Let's see about api's.
Api stands for application programming interface.
There are used in backend to get the data to frontend.
They carry the data in json format which is same as javascript object.
We can go to json formatter website in order to simplify and study the api response.
*/
const course = {
    courseName: "learning-javascript",
    coursePrice: 4000,
    courseId: 120
}

const { courseId } = course
const { courseId : id } = course

console.log(course.courseId);
console.log(courseId);
console.log(id);