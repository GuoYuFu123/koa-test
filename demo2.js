/**
 * get 请求
 */
const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
    /*request中获取请求*/
    let url = ctx.url
    // let req_query = ctx.request.query // {name: 'guoguo'}
    // let req_queryString = ctx.request.querystring //{name=guoguo&sex=nan}
    /*ctx*/
    let req_query = ctx.query // {name: 'guoguo'}
    let req_queryString = ctx.querystring //{name=guoguo&sex=nan}
    ctx.body = { url, req_query, req_queryString, ctx: ctx }
})
app.listen(3000, () => {
    console.log('server is start at 3000')
})
