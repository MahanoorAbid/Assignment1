//person name in var:
let person_Name: string = "MAhnOoR";

//for lowerCase: 

let lowercaseName: string = person_Name.toLowerCase();
console.log("Lowercase:", lowercaseName);


//for upperCase:

let upperCaseName:string = person_Name.toUpperCase();
console.log("Uppercase:" , upperCaseName);

//for titleCase:

let titleCaseName: string = person_Name
  .toLowerCase()
  .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
console.log("Title Case: ", titleCaseName);
