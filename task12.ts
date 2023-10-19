//Transpotition
let transport = ["Honda motorcycle", "Tesla car","Audi car"];



function printVehicleStatements(vehicles: string[]): void
 {
    vehicles.forEach((vehicle) => {
      console.log(`I would like to own a ${vehicle}.`);

    });
    
  }
  
  printVehicleStatements(transport);
