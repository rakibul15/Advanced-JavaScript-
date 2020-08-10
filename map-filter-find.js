const number = [3, 4, 5, 6, 7];
const output = [];

// for( let i = 0; i<number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result); 
// }
// console.log(output);

// function square(element) {
//    return element * element;
// }
// const result = number.map(square);
// console.log(result)

// const result = number.map(element => element*element);
// console.log(result);

// const result = number.filter(element => element>5);
// console.log(result);

const result = number.find ( element => element>5);
console.log(result);