const fs = require('fs');


const readStream = fs.createReadStream('./folder/large.txt')
const writeStream = fs.createWriteStream('./folder/large_write.txt')


// read the large file set by set
// readStream.on('data',function(data){
//     writeStream.write(data.toString())
//     writeStream.write('---chunk---')
// })

// read stream as pipe
readStream.pipe(writeStream);