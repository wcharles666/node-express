const express = require('express');
const db = require('./db/connect');
const path = require('path');
const config = require('./config');

const { routerPublic } = config;

const token = "";

const app = express();

const bodypaser = require('body-parser');
app.use(bodypaser.urlencoded({ extended: false }));
app.use(bodypaser.json());

// 路由引入
const userRouter = require('./router/userRouter');
const foodRouter = require('./router/foodRouter');

app.use(`${routerPublic}/user`, userRouter);
app.use(`${routerPublic}/food`, foodRouter);

const libStatic = path.join(__dirname, './static');

app.use(express.static(libStatic));

// 中间件  

const middleWare = (req, res, next) => {
    // console.log(req.url);
    // console.log(req.headers);
    if (req.url.indexOf('/user') !== -1 && token === "") {
        return res.send({
            code: -1,
            msg: "你没有权限访问这个接口"
        })
    }
    next();
}

app.use(middleWare);

app.listen(3000, () => {
    console.log('监听成功');
})