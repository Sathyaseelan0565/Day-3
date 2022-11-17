var students = [{
    "name" : "sathyaseelan v1", 
    "degree": "BE",
    "batch" : "B40 WE Tamil",
    "task" : "zen portal task",
    "mail": "sathyaseelan8389@gmail.com"
},
{
    "name" : "sathyaseelan v2", 
    "degree": "BE",
    "batch" : "B40 WE Tamil",
    "task" : "zen portal task",
    "mail": "sathyaseelan8389@gmail.com"}];

    // console.log(students);

//for loop
for(var i = 0; i < students.length; i++) {
    var obj = students[i];

    console.log(obj.name);
//     console.log(obj.degree);
//     console.log(obj.batch);
//     console.log(obj.task);
//     console.log(obj.mail);
}

//for In
for (var x in students) {
if (students.hasOwnProperty(x)) {
  console.log(students[x].name);
//   console.log(students[x].degree);
//   console.log(students[x].batch);
//   console.log(students[x].task);
//   console.log(students[x].mail);
  }
}


//for Of

for (let obj of students) {
    console.log(obj.name);
    // console.log(obj.degree);
    // console.log(obj.batch);
    // console.log(obj.task);
    // console.log(obj.mail);
}


//for Each
// students.forEach((x) => console.log(x.name));
students.forEach((x) => console.log(x.degree));
students.forEach((x) => console.log(x.batch));
students.forEach((x) => console.log(x.task));
students.forEach((x) => console.log(x.mail));
