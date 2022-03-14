const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const rotaClientes = require('./routes/clientes')
const rotaProdutos = require('./routes/produtos')
const app = express()

const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/clientes', rotaClientes);
app.use('/produtos', rotaProdutos);

app.listen(port, () => {
    console.log('Express started at http://localhost:3000')
})