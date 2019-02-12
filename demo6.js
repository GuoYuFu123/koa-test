/**
 * params: { Koa-router中间件（1） }
 * author： guoguo
 * data: 2019.2.12
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

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