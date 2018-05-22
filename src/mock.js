const Mock = require('mockjs');

Mock.mock('http://api/login',{
	"number": 1,
	"string": '登陆成功',
	"username": 'hrrm'
});
Mock.mock('http://api/getOrderList',{
  "order|4-10": [
    {
      "id|1-10": 10,
      "time": "@datetime()",
      "food|+1": [
        "宫保鸡丁",
        "五香牛肉",
        "荷塘小炒"
      ],
      "image": "@image('100x100','@color')",
      "money|30-100": 100,
      "num|1-10": 10,
      "isEvaluate|1": true
    }
  ]
});
Mock.mock('http://api/evaluate',{
  "data|1": true
});

Mock.mock('http://api/getDetails', {
  "detail": {
    "id": 1,
    "money|100-200": 200,
    "time": "@datetime()",
    "orderNum": '140000200707087689 ',
    "list": [
      {
        "id": 1,
        "name": "五香牛肉",
        "num": 2,
        "price": 58,
        "img": "@image('100x100','@color')"
      },
      {
        "id": 1,
        "name": "宫保鸡丁",
        "num": 2,
        "price": 38,
        "img": "@image('100x100','@color')"
      },
      {
        "id": 1,
        "name": "上汤小菠菜",
        "num": 2,
        "price": 25,
        "img": "@image('100x100','@color')"
      },
      {
        "id": 1,
        "name": "红烧肉",
        "num": 2,
        "price": 45,
        "img": "@image('100x100','@color')"
      },
    ]
  }
})
