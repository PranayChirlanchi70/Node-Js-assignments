const fs = require('fs');


fs.readFile('nodejs_architecture.txt', function (err, data) {
    if(err){
        console.log("error in writing file")
        return err
    }else{
        console.log(data.toString());   
    }
})