const http = require('http')
const express = require('express')
const status = require('http-status')
const sequelize = require('./src/database/database')
const app = express()
const routes = require('./src/routes/routes')
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use('/sistema', routes)

//Tratamento de erros
app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send('Page not found')
})

//Tratamento de erros
app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({error})
})

sequelize.sync({force: false}).then(()=>{
  const port = 3003
  app.set('port', port)
  const server = http.createServer(app)
  server.listen(port)
})

