//1. 引入 fs 模塊
const fs = require('fs');
//2. 調用方法讀取文件
// fs.readFile('./resources/IamDangerous.md',(err,data)=>{
//  //如果失敗，則拋出錯誤
//  if(err) throw err;
//  //如果沒有出錯，則輸出內容
//  console.log(data.toString());
// })
//3. 使用 Promise 封裝
const p = new Promise(function(resolve,reject){
 fs.readFile(".//resources/Superhero.md",(err,data)=>{
  if(err) reject(err);
  resolve(data);
 })
})

p.then(function(value){
 console.log(value.toString())
},function(){
 console.log('讀取失敗!!')
})