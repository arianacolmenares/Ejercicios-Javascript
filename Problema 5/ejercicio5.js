/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
* Write a command that prints out all of the people in the list.
* Write the command to remove "Dani" from the array.
* Write the command to remove "Juan" from the array.
* Write the command to move "Luis" to the front of the array.
* Write the command to add your name to the end of the array.
* Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
* Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/ 

// Solución ejercicio 5

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

let indexDani = people.indexOf("Dani");
people.splice(indexDani, 1)
console.log(people); 

let indexJuan = people.indexOf("Juan"); 
people.splice(indexJuan, 1)
console.log(people); 

let indexLuis = people.indexOf("Luis");
let luis = people.splice(indexLuis, 1);
people.unshift(luis[0])
console.log(people); 


let myName = "Ariana";
people.push(myName)
console.log(people); 

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
} 

let indexMaria = people.indexOf("Maria");
console.log("El índice de 'Maria' es: " + indexMaria);

console.log(people); 