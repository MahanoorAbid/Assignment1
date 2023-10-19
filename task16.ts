function shrinkingGuestList() {
    let guests: string[] = ['Noor', 'Amna', 'Alina', 'Dania'];
    const maxGuests = 2;
  
    console.log("Sorry, the dinner table won't arrive in time. You can invite only two people for dinner.");
  
    while (guests.length > maxGuests) 
    {
      const removedGuest = guests.pop();
      console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
    }
for(let guest of guests){
    console.log(`Dear ${guest}, you're still invited to dinner.`);

}
  guests=[];
  console.log("final guest list:" , guests);
}
shrinkingGuestList();