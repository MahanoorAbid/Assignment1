function findUsers(users: string[]): void {
  if (users.length === 0)
   {
    console.log('We need to find some users!');
    return;
  }

  console.log('Printing usernames:');
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user}`);
  });

  // Remove all usernames from the array
  users.splice(0, users.length);
  console.log('All usernames have been removed.');
}

// Test with some sample users
let usersList: string[] = ['user1', 'user2', 'user3'];
findUsers(usersList);

// Test with an empty list
let emptyList: string[] = [];
findUsers(emptyList);
