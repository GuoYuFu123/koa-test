/**
 * params: {koa-static静态资源中间件 }
 * author： guoguo
 * data: 2019.2.12
 */
/**
 *npm install --save koa-static
 */

const Koa = require('koa')
const static = require('koa-static')
const path = require('path')

const app = new Koa();

const staticPath = './static'
// 加载静态
app.use(static(path.join(__dirname, staticPath)))

app.use(async(ctx) => {
    let title = 'hello Koa2'
    await ctx.render('index', {title})
})

app.listen(3000, () => {
    console.log('[demo] server is start at 3000')
})