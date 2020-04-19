const express = require('express');
const router = express.Router();

const Food = require('../db/model/foodModel');

/**
 * @api {post} /food/add 添加食物
 * @apiDescription 输入食物信息,进行添加
 * @apiVersion 1.0.0
 * @apiName addfood
 * @apiGroup Food
 * 
 *
 * @apiParam {String} name 添加的食物名称
 * @apiParam {String} price  添加的食物价格
 * @apiParam {String} desc  添加的食物描述
 * @apiParam {String} typeName 添加的食物类型名称
 * @apiParam {number} typeId 添加的食物类型id
 * @apiParam {String} foodImg 食物图片url地址
 * 
 * 
 * @apiSuccess {String} msg 添加成功
 * @apiSuccess {Int} code 成功标识，值为0
 *
 * 
 * @apiParamExample  {type} 请求举例
 * {
 *     name: '岩烧鸡胸肉',
 *     price: '￥23.5',
 *     desc: '瘦腿瘦腰,啥都瘦',
 *     typeName:'低脂餐',
 *     typeId: 1,
 *     foodImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584723633981&di=9891c4c78b0432a90438839ab3ad78b3&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F58ee3d6d55fbb2fb3ed5da7e4d4a20a44723dce4.jpg'
 * }
 *
 * @apiSuccessExample 成功结果
 *  HTTP/1.1 200 OK
 *  {
 *       code : 0,
 *       msg: '添加成功',
 *  }
 * 
 * 
 * @apiError {String} msg 添加食物失败,请稍后再试/参数错误
 * @apiError {Int} code 错误标识，值为-1
 * 
 * 
 * @apiErrorExample 错误结果:
 *  HTTP/1.1 500 Internal Server Error
 *  {
 *       code : -1,
 *       msg: '添加食物失败,请稍后再试/参数错误',
 *  }
 * 
 */
router.post('/add', (req, res) => {
    console.log('shdjhsa');
    let data = {
        
    }
    return res.send({
        code: 0,
        msg: '请求食物接口',
    })
})


module.exports = router;
