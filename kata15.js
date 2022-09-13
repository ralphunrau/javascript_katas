// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = function(instructorArray) {
  let newObj = {};
  let currentCourse = '';

  for (let x of instructorArray) {
    currentCourse = x.course;
    if (newObj[currentCourse]) {
      newObj[currentCourse].push(x.name);
    } else {
      newObj[currentCourse] = [x.name]
    }
  }
  return newObj;
};

// checks if function is working properly
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));