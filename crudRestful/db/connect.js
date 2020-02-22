const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudTest', { useNewUrlParser: true });

// 连接数据库

const db = mongoose.connection;

db.on('error', () => {
    console.log('数据库连接出错');
});
db.once('open', () => {
    console.log('数据库连接成功');
});