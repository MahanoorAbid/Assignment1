let guests  = ['Noor', 'Amna', 'Alina', 'Dania'];

let guestWhoCantMakeIt = 'Alina';
let newGuest = 'Hafsa';

guests = guests.filter(guest => guest !== guestWhoCantMakeIt);

guests.push(newGuest);

console.log('New list of guests:', guests);


function invitationn(name: string): string {

    return `Hello, ${name}! 
     I'd love to invite you to dinner this Saturday at 7:00 PM.We can go to our favorite Italian restaurant,
      La Dolce Vita,`;
  }


  function invitationMessagee(names: string[]): void {
    for (const name of names)
    
     {
      let message = invitationn(name);
      console.log(message);
    }
  }

  
  invitationMessagee(guests);