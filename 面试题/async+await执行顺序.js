/*
async 和 await 相比直接使用 Promise 来说，
优势在于处理 then 的调用链，能够更清晰准确的写出代码。
缺点在于滥用 await 可能会导致性能问题，
因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，
导致代码失去了并发性
*/
var a = 0
var b = async () => {
  console.log('我第一个输出');
  //await 是异步操作，执行到await会交出函数的执行权，去执行同步代码
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a,'我第二个输出') // -> '1' 1