//Array

let array_name = ["Noor", "Alina","Amna"];

function generateMessage(name: string): string {

    return `Hello, ${name}! Hope you're having a great day.`;
  }


  function printPersonalizedMessages(names: string[]): void {
    for (const name of names)
    
     {
      const message = generateMessage(name);
      console.log(message);
    }
  }

  
  printPersonalizedMessages(array_name);
