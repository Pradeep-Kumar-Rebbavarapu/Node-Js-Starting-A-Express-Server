import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const {urlencoded} = bodyParser
const __dirname = path.resolve();
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post("/",(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(result.toString())
})




app.listen(3000,()=>{
    console.log('server started on port 3000');
});

