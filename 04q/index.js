const fs = require('fs');
const data = ` 
\n"Advantages of NodeJS:

Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-
blocking I/O operation improve the scalability and performance of web applications built on other frameworks.

Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory
and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with
multiple frameworks and makes the development process easier."`


fs.appendFile('nodejs_architecture.txt',data, function (err) {
    if(err){
        console.log("error in writing file")
        return err
    }else{
        console.log("data added successfully");   
    }
})