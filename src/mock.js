const Mock = require('mockjs');

Mock.mock('http://api/login',{
	"number": 1,
	"string": '登陆成功',
	"username": 'hrrm'
});
