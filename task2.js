"use strict";
//person name in var:
let person_Name = "MAhnOoR";
//for lowerCase: 
let lowercaseName = person_Name.toLowerCase();
console.log("Lowercase:", lowercaseName);
//for upperCase:
let upperCaseName = person_Name.toUpperCase();
console.log("Uppercase:", upperCaseName);
//for titleCase:
let titleCaseName = person_Name
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
console.log("Title Case: ", titleCaseName);
