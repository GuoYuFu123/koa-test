/**
 * post
 */
const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    console.log(ctx)
    if(ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h1>guoguo form</h1>
        <form method="POST" action='/'>
            <p>userName</p>
            <input name='username' /><br />
            <p>age</p>
            <input name='age' /><br />
            <p>website</p>
            <input name='website' /><br />
            <button type="submit">submit</button>
        </form>
        `
        ctx.body=html;
    } else if(ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = '接收post'
    } else {
        ctx.body = '<h1>404</h1>'
    }
    
});
app.listen(3000,()=> {
    console.log('server is start at 3000')
})