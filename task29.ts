function printGreeting(username: string)
 {
  if (username === 'admin') 
  {
    console.log(`Hello admin, would you like to see a status report?`);
  } 
  else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

const usernames = ['admin', 'Eric', 'John', 'Alice', 'admin'];

for (const username of usernames) 
{
  printGreeting(username);
}
