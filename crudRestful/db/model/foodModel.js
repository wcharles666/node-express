const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: true },
    typeName: { type: String, required: true },
    typeId: { type: Number, required: true },
    foodImg: { type: String }
})

const Food = mongoose.model('foods', foodSchema);

// 计算数字精度时 小数的加法因为二进制的原因可能会产生一长串  
// 解决方案  
//  a b 4(a和b相加，保留4位)
// (a*10000 + b*10000) / 10000;
module.exports = Food