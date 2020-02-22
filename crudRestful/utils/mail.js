const nodemailer = require("nodemailer");

// 1. 获取邮箱验证码接口 
// 发送邮件
// 邮箱和验证码保存到内存当中
// 发送手机验证码

// 2. 5分钟之内不能重复发送
// {1111@qq.com: {ctime: 第一次发送时间戳, code: 12333}}

// 3. 5分钟名之内只能发送三次
// create reusable transporter object using the default SMTP transport
// 创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",  // 发送方邮箱  在nodemail 源代码中找寻
    port: 465, // 端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '519440695@qq.com', // generated ethereal user 发送方的邮箱地址
        pass: 'zrfcffcjbzbpbhdh' // generated ethereal password mtp 验证码 在qq邮箱里的设置
    }
});

// let mailobj = {
//     from: '"charles" <519440695@qq.com> ',
//     to: 'tiankun@tuya.com',
//     subject: "来自小田的邮件",
//     text: `您的验证码是23123，有效期五分钟`,
// }
// transporter.sendMail(mailobj, (err, data) => {
//     console.log(err);
//     console.log(data);
// })
function send(mail, code) {
    // 邮件信息
    let mailobj = {
        from: '"charles" <519440695@qq.com> ',
        to: mail,
        subject: "来自小田的邮件",
        text: `您的验证码是${code}，有效期五分钟`,
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailobj, (err, data) => {
            if (err) {
                reject();
            } else {
                resolve();
            }
        })
    })
}

let exportsObj = {
    send,
}
module.exports = exportsObj;