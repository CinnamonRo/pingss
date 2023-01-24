// function Hello(param1){
//     console.log("hello", param1)
// }
// function free(cb){
//     let name = "Fredlie"
//     cb(name)
// }
// free(hi=>{
//     console.log("hello",hi)
// })

// function One(){
//     setTimeout(()=>{
//         console.log("1")
//     },1000)
// }
// function Two(){
//     console.log("2")
// }
// One()
// Two()

const fs = require("fs") 

const cbBacaFile = (err,data)=>{
    if(err){ 
        console.log("err baca", err)
    }else{
        console.log(data.toString())
    }
}
let data = fs.readFile('coba.md', cbBacaFile)
