console.log("start")
// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve("Abhizzzz")
//     }
//     else{
//         reject(new Error("Why error"))
//     }
// })
// console.log(promise)
// promise.then((res)=>{
//     console.log("Abhishek Singh")
// }).catch((err)=>console.log(err)
// )

//By Callback
// function intraction(value,cb){
//     setTimeout(()=>{
//        cb(value)
//     },2000)
// }

// const ans = intraction("Abcdefgh",function(message){
//     console.log(message)
// })

//Using Promise 
// function intraction2(value){
//     setTimeout(()=>{
//         return value
//     },1000)
// }

function intraction2(value){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(value)
      },2000)
        
    })
}
intraction2("Abhishek").then((res)=>{
    console.log(res)
})
// console.log(ans)

console.log("end")