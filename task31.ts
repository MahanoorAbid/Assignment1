function checkUsernames() {
  // Current users list
  const current_users: string[] = ['John', 'Harry', 'Amna', 'Alice', 'Michael'];

  // New users list
  const new_users: string[] = ['RobErT', 'Mary', 'Mike', 'Steven', 'ALICE'];


  // Convert all current usernames to lowercase for case-insensitive comparison

  const current_users_lower: string[] = current_users.map((username) => username.toLowerCase());


  // Loop through the new users list

  for (const new_username of new_users)
   {
    // Check if the new username exists in the current usernames (case-insensitive)
    
    const new_username_lower = new_username.toLowerCase();
    const username_exists = current_users_lower.includes(new_username_lower);

    // Display appropriate messages
    if (username_exists) 
    {
      console.log(`The username "${new_username}" is already taken. Please choose a different one.`);
    } 
    else {
      console.log(`The username "${new_username}" is available.`);
    }
  }
}

// Call the function to check usernames
checkUsernames();
