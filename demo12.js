/**
 * params: {koa-static静态资源中间件 }
 * author： guoguo
 * data: 2019.2.12
 */
/**
 *npm install --save koa-static [通过http://localhost:3000/1.png直接访问]
 */

const Koa = require('koa')
const static = require('koa-static')
const path = require('path')

const app = new Koa();

const staticPath = './static'
// 加载静态
app.use(static(path.join(__dirname, staticPath)))

app.use(async(ctx) => {
    ctx.body = 'hello guoguo'
})

app.listen(3000, () => {
    console.log('[demo] server is start at 3000')
})