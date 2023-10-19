type ShirtSize = "small" | "medium" | "large";

function make_shirt(size: ShirtSize = "large", message: string = "I love TypeScript"): void {
  console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt("medium");

// Creating a shirt of any size with a different message
make_shirt("small", "I love JavaScript too!");

export{};