function makeGreat(names: string[]): string[] {
    const greatMagicians: string[] = names.map((name) => `Great ${name}`);
    return greatMagicians;
  }
  
  function showMagicians(names: string[]): void {
    for (const name of names) {
      console.log(name);
    }
  }
  
  // Test data: original array of magicians' names
  const magiciians: string[] = ["Harry", "Hermione", "Ron"];
  
  // Create a copy of the original array and make the magicians great
  const greatMagiciansArray = makeGreat([...magiciians]);
  
  // Show the original magicians' names
  console.log("Original Magicians:");
  showMagicians(magiciians);
  
  // Show the magicians' names with "Great" added to each name
  console.log("Great Magicians:");
  showMagicians(greatMagiciansArray);
  