const getFizzBuzzString = (inputNum: number) => {
  const fizz = "Fizz"
  const buzz = "Buzz"
  const countMemo = `今の値は${inputNum}です : `

  if(inputNum % 15 === 0){
    return `${countMemo}${fizz}${buzz}`
  } else if(inputNum % 5 === 0){
    return `${countMemo}${buzz}`
  } else if(inputNum % 3 === 0){
    return `${countMemo}${fizz}`
  } else {
    return `${countMemo}${inputNum}`
  }
}

// for(let i = 1; i <= 100; i++){
//   const message = getFizzBuzzString(i)
//   console.log(message);
// }

const sequence = (start: number, end: number) => {
  const result: number[] = []
  for(let i = start; i <= end; i++){
    result.push(i)
  }
  return result
}

for(const i of sequence(1, 100)){
  const message = getFizzBuzzString(i)
  console.log(message);
}