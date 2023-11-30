const Koa = require('koa')
const app = new Koa()

const { PORT } = require('./config/config.default')

app.use((ctx, next) => {
    ctx.body = 'hello world'
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})