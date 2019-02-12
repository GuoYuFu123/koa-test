/**
 * params: { Koa-router中间件（2）- 统一前缀路由 }
 * author： guoguo
 * data: 2019.2.12
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();

const router = new Router({
    prefix: '/guoguo' //全局加前缀【所有的路由都带有这个前缀】
});

router.get('/',function(ctx, next) {
    ctx.body = 'Hello guoguo'
})
.get('/todo', (ctx) => {
    ctx.body = 'Todo page'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server is start at 3000')
})