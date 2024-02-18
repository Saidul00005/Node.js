//CommonJS ayntax
const fs = require('node:fs');


//Process to read a file

// fs.readFile('file.txt','utf8',(err,data)=>{
//         console.log(err,data)
// })

const a = fs.readFileSync('file.txt')
console.log(a.toString())



//Process to write a file

// fs.writeFile('file2.txt',"This is data",()=>{
//         console.log("Work has been completed")
// })

const b = fs.writeFileSync('file2.txt',"This is another data");
console.log(b)
