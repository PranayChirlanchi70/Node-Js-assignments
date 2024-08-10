const fs = require('fs');



fs.unlink('nodejs_architecture.txt', function (err) {
    if(err){
        console.log("error in deleting file")
        return err
    }else{
        console.log("file deleted  successfully");   
    }
})