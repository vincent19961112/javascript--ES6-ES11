//引入 fs 模塊
const fs = require("fs");

//讀取IamDangerous
function readIamDangerous(){
  return new Promise((resolve,reject)=>{
   fs.readFile("./resources/IamDangerous.md",(err,data)=>{
    //如果失敗
   if(err) reject(err)
    //如果成功
   resolve(data)
  })
 })
}
//讀取Superhero
function readSuperhero(){
  return new Promise((resolve,reject)=>{
   fs.readFile("./resources/Superhero.md",(err,data)=>{
    //如果失敗
   if(err) reject(err)
    //如果成功
   resolve(data)
  })
 })
}
//讀取WhyDoI
function readWhyDoI(){
  return new Promise((resolve,reject)=>{
   fs.readFile("./resources/WhyDoI.md",(err,data)=>{
    //如果失敗
   if(err) reject(err)
    //如果成功
   resolve(data)
  })
 })
}

//聲明一個 async 函數
async function main(){
 //讀取IamDangerous
let IamDangerous = await readIamDangerous();
 //讀取Superhero
let Superhero = await readSuperhero();
 //讀取dWhyDoI
let WhyDoI = await readWhyDoI();

console.log(IamDangerous.toString());
console.log(Superhero.toString());
console.log(WhyDoI.toString());
}

main();

