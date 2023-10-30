type User = {
  name: string;
  age: number;
};
function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: '太郎',
      age: 10,
    };
    resolve(user);
  });
}
getUser().then((user: User) => {
  console.log(user);
});

const promise1: Promise<number> = Promise.resolve(1);
const promise2: Promise<string> = promise1.then((value) => `${value}`);
const promise: Promise<boolean> = Promise.resolve('1')
  .then((value) => Number(value)) // Promise<number>型になる
  .then((value) => value > 0); // Promise<boolean>型になる

Promise.resolve(1)
  .then(() => {
    throw new Error();
  })
  .then(() => {
    console.log('fulilled');
  })
  .catch(() => {
    console.log('rejected');
  });

// 受け取ったときにエラーにしているから下に行くよね的なのり
Promise.resolve(1)
  .then(() => {
    return Promise.reject(new Error());
  })
  .then(() => {
    console.log('fulilled');
  })
  .catch(() => {
    console.log('rejected');
  });
