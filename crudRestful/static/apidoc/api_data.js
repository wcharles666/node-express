define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./static/apidoc/main.js",
    "group": "/Users/charles/Documents/GitHub/crudRestful/static/apidoc/main.js",
    "groupTitle": "/Users/charles/Documents/GitHub/crudRestful/static/apidoc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/user/getMailcode",
    "title": "获取邮箱验证码",
    "description": "<p>输入邮箱,获取邮箱注册验证码</p>",
    "version": "1.0.0",
    "name": "getMailcode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>接受验证码的邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求举例",
          "content": "{\n    mail : '519440695@qq.com'\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>邮件已发送,请注意查收</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识，值为0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功结果",
          "content": "HTTP/1.1 200 OK\n{\n     code : 0,\n     msg: '验证码发送成功',\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>邮件发送失败,请稍后再试/参数错误</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>错误标识，值为-1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误结果:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     code : -1,\n     msg: '参数错误/邮件发送失败,请稍后再试',\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "注册用户名",
    "description": "<p>输入用户名,密码,邮箱,验证码注册用户名</p>",
    "version": "1.0.0",
    "name": "reg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求举例",
          "content": "{\n    us: 'wcharles',\n    ps: 'love',\n    mail: '519440695@qq.com',\n    code: 1234\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>注册成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识，值为0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功结果",
          "content": "HTTP/1.1 200 OK\n{\n     code : 0,\n     msg: '注册成功',\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>1.验证码错误请重试 2.参数错误 3.用户名已存在</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>错误标识，值为-1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误结果:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     code : -1,\n     msg: 1.验证码错误请重试 2.参数错误 3.用户名已存在,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  }
] });
