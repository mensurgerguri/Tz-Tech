var express = require('express');
var app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());

var env = process.env.NODE_ENV || 'development';
var dbConfig = require('./app/database/dbConfig')[env];


const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const db = mysql.createConnection({
  host: dbConfig.database.host,
  user: dbConfig.database.user,
  password: dbConfig.database.password,
  database: dbConfig.database.database,
  multipleStatements: dbConfig.database.multipleStatements
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use(cors(corsOptions));

global.__basedir = __dirname;


// request routers
// let fileRouter = require('./app/routers/file.router.js');
// app.use('/', fileRouter);

let usersRouter = require('./app/routers/user.router.js');
let wishRouter = require('./app/routers/wish.router.js');

let PurchaseRouter = require('./app/routers/purchase.router.js');
app.use('/users', usersRouter)
app.use('/wish', wishRouter)
app.use('/order', purchaseRouter)


let server = app.listen(8080, () => {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})
