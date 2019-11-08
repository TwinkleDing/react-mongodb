const router = require('koa-router')()
const controller = require('../controller')

router.get('/', async (ctx, next) => {
  ctx.body = "hello world!"
})
.post("/api/user", controller.user.register)  //　用户注册
.post("/api/user/login", controller.user.login) // 用户登录
.get('/api/user',controller.user.query) // 根据用户_id查询用户
.get('/api/userList',controller.user.getUser) // 查询用户列表
.get('/api/other/checkcode', controller.other.checkcode)// 验证码获取
.post("/api/leave", controller.leave.addLeaver)// 添加留言
.get("/api/leave", controller.leave.getLeaves)// 留言获取
.delete("/api/leave/:id", controller.leave.deleteLeaver) // 删除留言

.post('/api/upload', controller.img.upload)
.get('/api/upload', controller.img.getFile)
module.exports = router
