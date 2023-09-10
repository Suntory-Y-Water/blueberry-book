let i: number = 1
const fizz = "Fizz"
const buzz = "buzz"

// fizz buzz
while (i <= 50) {
  const countMemo = `今の値は${i}です : `
  if(i % 15 === 0){
    console.log(countMemo,fizz, buzz);
  } else if(i % 5 === 0){
    console.log(countMemo,buzz);
  } else if(i % 3 === 0){
    console.log(countMemo,fizz);
  } else {
    console.log(countMemo,"no");
  }
  i++
}

// fizz buzz
for(let i = 1; i <= 50; i++){
  const countMemo = `今の値は${i}です : `
  if(i % 15 === 0){
    console.log(countMemo,fizz, buzz);
  } else if(i % 5 === 0){
    console.log(countMemo,buzz);
  } else if(i % 3 === 0){
    console.log(countMemo,fizz);
  } else {
    console.log(countMemo,"no");
  }
}