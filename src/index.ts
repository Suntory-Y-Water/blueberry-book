function request1(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('failed1'));
    }, 4000);
  });
}
function request2(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('failed2'));
    }, 2000);
  });
}
function request3(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('failed3'));
    }, 1000);
  });
}
Promise.all([request1(), request2(), request3()])
  .then(([num1, num2, num3]) => {
    console.log(num1, num2, num3);
  })
  .catch((e) => {
    // 最も早く終わった例外が返る
    console.log(e.message);
    // @log: 'failed3'
  });
