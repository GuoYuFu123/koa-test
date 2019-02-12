/**
 * params: {Koa2的模板初识（ejs） }
 * author： guoguo
 * data: 2019.2.12
 */
/**
 * npm install --save koa-views
 * npm install --save ejs
 */

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')

const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async(ctx) => {
    let title = 'hello Koa2'
    await ctx.render('index', {title})
})

app.listen(3000, () => {
    console.log('[demo] server is start at 3000')
})