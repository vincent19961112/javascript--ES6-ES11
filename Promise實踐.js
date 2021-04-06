//引入 fs 模塊
const fs = require("fs");

//回調地獄
// fs.readFile('./resources/IamDangerous.md',(err, data1)=>{
//   fs.readFile('./resources/Superhero.md',(err, data2)=>{
//     fs.readFile('./resources/WhyDoI.md',(err, data3)=>{
//        let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//        console.log(result)
//     })
//   })
// })

//使用 promise 實現
const p = new Promise((resolve,reject)=>{
 fs.readFile("./resources/IamDangerous.md",(err,data)=>{
  resolve(data);
 })
})


p.then(value=>{
 return new Promise((resolve,reject)=>{
   fs.readFile("./resources/Superhero.md",(err,data)=>{
    resolve([value,data])
   })
 }).then(value=>{
  return new Promise((resolve,reject)=>{
   fs.readFile("./resources/WhyDoI.md",(err,data)=>{
    value.push(data)
    resolve(value)
   })
  })
 })
}).then(value=>{
 console.log(value.join('\r\n'))
})