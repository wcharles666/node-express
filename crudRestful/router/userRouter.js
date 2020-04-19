const express = require('express');
const router = express.Router();
const User = require('../db/model/usersModel');
const sendMail = require('../utils/mail.js');

//  0: 返回正常，请求成功
// -1: 接口请求正常，返回错误
// -2: 接口请求不正常，返回异常  

// api文档按一定规则注释
let codes = {
    // {ctime}
} //通过内存保存验证码

/**
 * @api {post} /user/getMailcode 获取邮箱验证码
 * @apiDescription 输入邮箱,获取邮箱注册验证码
 * @apiVersion 1.0.0
 * @apiName getMailcode
 * @apiGroup User
 * 
 *
 * @apiParam {String} mail 接受验证码的邮箱
 *
 * 
 * @apiSuccess {String} msg 邮件已发送,请注意查收
 * @apiSuccess {Int} code 成功标识，值为0
 *
 * 
 * @apiParamExample  {type} 请求举例
 * {
 *     mail : '519440695@qq.com'
 * }
 *
 * @apiSuccessExample 成功结果
 *  HTTP/1.1 200 OK
 *  {
 *       code : 0,
 *       msg: '验证码发送成功',
 *  }
 * 
 * 
 * @apiError {String} msg 邮件发送失败,请稍后再试/参数错误
 * @apiError {Int} code 错误标识，值为-1
 * 
 * 
 * @apiErrorExample 错误结果:
 *  HTTP/1.1 500 Internal Server Error
 *  {
 *       code : -1,
 *       msg: '参数错误/邮件发送失败,请稍后再试',
 *  }
 * 
 */
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

/**
 * @api {post} /user/reg 注册用户名
 * @apiDescription 输入用户名,密码,邮箱,验证码注册用户名
 * @apiVersion 1.0.0
 * @apiName reg
 * @apiGroup User
 * 
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 密码
 * @apiParam {String} mail 邮箱
 * @apiParam {Int} code 验证码
 *
 * 
 * @apiSuccess {String} msg 注册成功
 * @apiSuccess {Int} code 成功标识，值为0
 *
 * 
 * @apiParamExample  {type} 请求举例
 * {
 *     us: 'wcharles',
 *     ps: 'love',
 *     mail: '519440695@qq.com',
 *     code: 1234
 * }
 *
 * @apiSuccessExample 成功结果
 *  HTTP/1.1 200 OK
 *  {
 *       code : 0,
 *       msg: '注册成功',
 *  }
 * 
 * 
 * @apiError {String} msg 1.验证码错误请重试 2.参数错误 3.用户名已存在
 * @apiError {Int} code 错误标识，值为-1
 * 
 * 
 * @apiErrorExample 错误结果:
 *  HTTP/1.1 500 Internal Server Error
 *  {
 *       code : -1,
 *       msg: 1.验证码错误请重试 2.参数错误 3.用户名已存在,
 *  }
 * 
 */
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