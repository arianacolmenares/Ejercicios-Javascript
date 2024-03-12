/* Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/ 

// Solución ejercicio 4

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
    console.log("Common courses:");
    commonCourses.forEach(course => console.log(course));
} else {
    console.log("No common courses found.");
}

/* Respuesta: 
*      Common courses: Programming 
*/ 
