const express =require('express')
const app=express()
app.listen(80,()=>{
    console.log('服务启动')
})

//设置跨域访问
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    // //允许的header类型
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    // //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 可以带cookies
    res.header("Access-Control-Allow-Credentials", true);
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})


app.get('/',(req,res)=>{
    res.json('helloword')
})

app.get('/list',(req,res)=>{
    const list = [
        {name:'test1'},
        {name:'test2'},
        {name:'test3'},
    ]
    res.json(list)
})