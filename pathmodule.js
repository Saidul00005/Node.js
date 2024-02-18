const path = require('node:path')

//Print of Path name 

console.log(path.win32.basename('C:\\temp\\myfile.html'));
// Returns: 'C:\\temp\\myfile.html')


//Basename of Path

console.log(path.win32.basename('C:\\file.html', '.html'));
// Returns: 'file'
console.log(path.win32.basename('C:\\file.HTML', '.html'));
// Returns: 'file.HTML'



//Directory of Path

console.log(path.dirname('/abc/def/ghi/jkl'));
// Returns: '/abc/def/ghi/jkl')



//Extension of file 

console.log(path.extname(__filename))
