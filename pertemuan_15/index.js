//Asynchronus

//synchronus -> single thread
console.log("proses 1")
console.log("proses 2")
console.log("proses yang memakan waktu lama")
console.log("proses 4")

//Asyncronus -> multi thread -> nonblocking
//1. parallel
setTimeout (() => {
    console.log("process 1");
},3000)
setTimeout (() => {
    console.log("process 2");
},500)

//2. concurrency


// Promise
let condition = true
const newPromise = new Promise((resolve, reject)) => {
    if (condition) {
        resolve ("berhasil")
    } else {
        reject ("gagal")
    }
}

//cara pakai promise
//1 then/catch
newPromise
.then((result) => result)
.then((result2) => console.log (result2))
.catch((result3) => console.log (error))

//2 asyn/await
// harus dibuat dalam fungsi

//pakai promise yang sudah ada
//fetch
fetch()