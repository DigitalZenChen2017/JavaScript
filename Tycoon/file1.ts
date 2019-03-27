let cargoType: string = "wood";
let unitPrice: number = 250;
let carLoads: number = 6; // quantity
let input: (string | number);

input = 4;
input = "four";
//input = true; // Boolean value

// Tuple Example - Basically a Fixed Array with Pre-Defined Data Types
let cargo: [string, number] = ["steel", 400];
cargo[1] = 360;
//cargo.push(24, "wood", 250);
// represents unit type, price 
// Must be key in correct order!

// Creating Array with Predefined Data Type
let stations: string[] = ["Las Vegas", "Denver", "Austin", "Seattle"];


alert("We need " + carLoads + "of " + cargoType + " and paying " + unitPrice + " per carLoad");
alert(`We need ${carLoads} ${cargoType} and paying ${unitPrice} per carLoad.`)
alert(`We need ${carLoads} of  ${cargo[0]} delivered to ${stations[0]} at price of ${cargo[1]} and `);

// Another Way to Define Array in TypeScript

// Data Inference
let testVar = 7;

// A constant for a data type 
type colorType = [string, number, number, number];

let red: ColorType = ['Red', 1, 0, 0];
let green: [string, number, number, number] = ['Green', 0, 1, 0];
let blue = ['Blue', 0, 0, 1];

// const is to final in Java
const EARTCIRC = 22700;
const MILES2KM = 1.61;
const THREEYRS = 1095.75;

//enum {"Hamilton" = 12, "Warren", "Butler", "Clermont"}
//
//function Sample(num: number, str: string): void {
//      
//}
      
function showManifest(load: string, volume: number): void {
      alert(`Cargo: $(load), Amount shipped: ${volume}`);
}

showManifest(cargoType, carLoads);