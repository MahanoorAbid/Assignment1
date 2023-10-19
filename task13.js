"use strict";
let array_invite = ["Noor", "Alina", "Amna"];
function invitation(name) {
    return `Hello, ${name}! 
     I'd love to invite you to dinner this Saturday at 7:00 PM.We can go to our favorite Italian restaurant,
      La Dolce Vita,`;
}
function invitationMessage(names) {
    for (const name of names) {
        const message = invitation(name);
        console.log(message);
    }
}
invitationMessage(array_invite);
