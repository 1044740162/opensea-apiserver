const Koa = require('koa')
const koaRouter = require('koa-router')
const fs = require('fs')
const path = require('path')

const app = new Koa()

const router = new koaRouter()


router.get('/:tokenId', ctx => {
    const { tokenId } = ctx.params;
    ctx.set('Content-type', 'application/json')
    const json = fs.readFileSync(path.resolve(__dirname, `./json/${tokenId}.json`), 'utf8')
    ctx.body = json
})


app.use(router.routes())


app.listen(8881)


