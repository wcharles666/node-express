const express = require('express');
const router = express.Router();
const User = require('../db/model/usersModel');
const sendMail = require('../utils/mail.js');

// 0: 返回正常，请求成功
// -1: 接口请求正常，返回错误
// -2: 接口请求不正常，返回异常  

// api文档按一定规则注释
let codes = {
    // {ctime}
} //通过内存保存验证码

router.post('/getMailcode', (req, res) => {
    let { mail } = req.body;
    if (mail) {
        let code = parseInt(Math.random() * 10000); // 产生随机的验证码
        sendMail.send(mail, code)
            .then(() => {
                res.send({
                    code: 0,
                    msg: '邮件已发送,请注意查收'
                })
                codes[mail] = code;
                console.log(codes);
            })
            .catch(() => {
                res.send({
                    code: -1,
                    msg: '邮件发送失败,请稍后再试'
                })
            })
    } else {
        res.send({
            code: -1,
            msg: '参数错误'
        })
    }
})

router.post('/reg', (req, res) => {
    // 获取数据
    // 数据处理
    // 返回数据
    let { us, ps, code } = req.body;
    if (codes[us] !== Number(code)) {
        return res.send({
            code: -1,
            msg: '验证码错误请重试'
        })
    }
    // 首先判断验证码是否ok
    if (!us || !ps) {
        return res.send({
            code: -1,
            msg: '参数错误'
        })
    }
    User.find({ us })
        .then(data => {
            if (data.length === 0) {
                return User.insertMany({ us, ps })
            } else {
                res.send({
                    code: -1,
                    msg: '用户名已存在'
                })
            }
        })
        .then(() => {
            res.send({
                code: 0,
                msg: '注册成功'
            })
        })
        .catch(() => {
            res.send({
                code: -2,
                msg: '注册失败'
            })
        })
})

router.post('/login', (req, res) => {
    let { us, ps } = req.body;
    if (!us || !ps) {
        return res.send({
            code: -1,
            msg: '参数错误'
        })
    }
    User.find({ us, ps })
        .then(data => {
            if (data.length === 0) {
                res.send({
                    code: 0,
                    msg: '无此用户,请先注册'
                })
            } else {
                res.send({
                    code: 0,
                    msg: '登录成功'
                })
            }
        })
        .catch(() => {
            res.send({
                code: -2,
                msg: '请求异常'
            })
        })

})

module.exports = router;