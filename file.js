// import fs which is file management
const fs = require('fs');

// this is how to read file
fs.readFile('./folder/text.txt',(err,data)=>{
    if(err) {
        console.log("This is error:",err)
    }

    console.log(data.toString());
})

// if file exist rewrite the file context
// if not create a new text123 file 
// else delete that text123
if(fs.existsSync('./folder/text.txt')){
    fs.writeFile('./folder/text123.txt', 'Hello everyone', (err, data) => {
        if (err) {
            console.log("This is error:", err)
        }
    console.log('Completed Changes')
    })
}
else {
    fs.unlink('./folder/text123.txt',(err)=>{
        if(err){
            console.log("File deleteing error:",err)
        }
        console.log("Deleting file completed")
    })
}


if(fs.existsSync('./newfolder')){
    // folder deleting
    fs.rmdir('./newfolder', (err) => {
        if (err) {
            console.log("Folder deleting error:", err)
        }
        console.log("Folder deleted completely")
    })
}
else {
    // make the directory 
    fs.mkdir('./newfolder', (error) => {
        if (error) {
            console.log("This is folder creating error:", error)
        }
        console.log("folder created")
    })
}


