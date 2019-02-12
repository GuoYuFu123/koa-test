/**
 * params: { Koa-router中间件（3）- 路由参数 }
 * author： guoguo
 * data: 2019.2.12
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
 console.log(ctx)
 ctx.body = ctx.query //直接通过query进行参数接受哦
})

//三、加载路由哦中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server is start at 3000')
})