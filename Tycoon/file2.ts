/* Destination - String, Cargo - String, Price - Number, Total - Number, Units - Number
* Message
*/

function displayCargoArrival(destination: string, cargoName: string, cargoPrice: number, cargoUnits: number): void {
    alert(`ATTENTION: Your Cargo Item -${cargoName} priced at ${cargoPrice}/unit with Quantity of ${cargoUnits} has arrived at ${destination}`);
}

displayCargoArrival("San Francisco Port Dock", "Hinotori 11R22.5 Tires", 225, 500);
    
