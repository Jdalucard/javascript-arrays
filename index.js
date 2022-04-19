
// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

// Write your code here!



for (let i =0 ; i <students.length; i++){
  document.write (students[i]);
}

const names = students.map((student) => {
  return {
    fullname: student.name + ' ' + student.lastname,
    age: student.age,
    course: student.course
  }
})