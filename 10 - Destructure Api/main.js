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