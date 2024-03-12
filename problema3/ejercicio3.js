/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/ 

// Solución ejercicio 3
function computeSumAndProduct(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    console.log("The sum is", sum); 
    console.log("The product is", product); 
}

const array = [1, 2, 3, 4];
computeSumAndProduct(array);

/* Respuesta: 
*   The sum is 10
*   The product is 24 
*/
