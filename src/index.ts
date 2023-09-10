import { readFile} from 'fs/promises'

const p = readFile('./src/bk/foo.txt', 'utf-8')

// errorにはunknownをつける
p.then((result) => {
  console.log('成功',result);
},(error: unknown) => {
  console.log('失敗', error);
})

// 8.3.4 自分でPromiseを定義してみよう
const countTime = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
})

countTime.then((num) => {
  console.log(`結果は${num}`);
})