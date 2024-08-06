
const express = require('express');
const morgan = require('morgan');

//conf inicial
const app = express();
app.set('port', 3000)
app.listen(app.get('port'), () => {
console.log('Server on port:', app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(express.json()); 

app.use(require('./routes/index.routes'))