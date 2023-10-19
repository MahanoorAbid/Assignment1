let list_array: string[] = ['Noor', 'Amna', 'Alina', 'Dania'];
console.log("original guest list");

for(let guest of list_array){
    console.log(`Dear ${guest},  you are invited to the dinner party!`);
}

console.log("Good news! we found a new bigger table");
list_array.unshift("Ali");

let middle_guest = Math.floor(list_array.length/2);
list_array.splice(middle_guest, 0,"Minahil");

list_array.push("Aima");
console.log("updated list");
for(let guest of list_array){
    console.log(`Dear ${guest}, you are invuted to the dinner party!`);

}

