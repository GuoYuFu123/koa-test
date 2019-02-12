/**
 * params: { Koa-cookie }
 * author： guoguo
 * data: 2019.2.12
 */

 /**
  *ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
  *ctx.cookies.set(name,value,[options])：在上下文中写入cookie

  options配置
    1、domain：写入cookie所在的域名
    2、path：写入cookie所在的路径
    3、maxAge：Cookie最大有效时长
    4、expires：cookie失效时间
    5、:是否只用http请求中获得
    6、overwirte：是否允许重写
  */
const Koa = require('koa')
const app = new Koa();

app.use(async(ctx) => {
    if(ctx.url === '/index') {
        ctx.cookies.set('name', 'guoguo', {
            domain: 'localhost',
            path: '/index',
            maxAge: 1000 * 60 * 60 * 24,
            expires: new Date('2019-3-3'),
            httpOnly: false,
            overwirte: false
        })
        ctx.body = 'cookies is ok'
    } else {
        if(ctx.cookies.get('name')) {
            ctx.body = ctx.cookies.get('name')
        } else {
            ctx.body = 'Cookie is none'
        }
        
    }
})

app.listen(3000, () => {
    console.log('[demo] server is start at 3000')
})