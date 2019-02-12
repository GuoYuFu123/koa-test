/**
 * params: { Koa-router中间件（2）- 路由层级前缀 }
 * author： guoguo
 * data: 2019.2.12
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();

//一、声明路由
//1 home
let home  = new Router()
home.get('/guoguo',async(ctx)=> {
    ctx.body = 'home guoguo'
})
.get('/todo', async(ctx) => {
    ctx.body = 'home toDo'
})
//2 page
let page = new Router()
page.get('/guoguo', async(ctx) => {
    ctx.body = 'page guoguo'
})
.get('/todo', async(ctx) => {
    ctx.body = 'page todo'
})

//二、装载所有的路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

//三、加载路由哦中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server is start at 3000')
})