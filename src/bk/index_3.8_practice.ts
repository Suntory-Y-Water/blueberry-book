type User = {
  name: string
  age: number
  premiumUser: boolean
}

const data: string = `
uhyo, 26, 1
John, 17, 0
Mary, 14, 1
`;

const users: User[] = []
const lines: string[] = data.trim().split('\n');
for (const line of lines) {
  const [name, age, premiumUser] = line.split(', ');
  users.push({
    name,
    age: Number(age),
    premiumUser: premiumUser === '1'
  });
}


for(const user of users){
  if(user.premiumUser){
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
  }
}

console.log(users);
