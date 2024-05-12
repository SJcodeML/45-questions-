
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model 
// name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-
// value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.




// function createCar(manufacturer: string, model: string, options: { [key: string]: any }): object {
//     const car: { [key: string]: any } = { manufacturer, model, ...options };
//     return car;
// }

// // Call the function with required information and additional properties
// const myCar = createCar("Toyota", "Camry",  { color: "blue", year: 2022});

// // Print the returned object
// console.log(myCar);


let chars:string[]=["A", "B" , "C" , "D", "E"];
let number1 : number[] =[1,2,3,4,5,6];
let bol:boolean[]=[false,true];
function isExistNumber<T>(item:T , list:T[]): Boolean {
    return list.includes(item);
}

console.log(isExistNumber<number>(3 ,number1 ));
console.log(isExistNumber<string>("v" ,chars ));
console.log(isExistNumber<boolean>(false,bol ));