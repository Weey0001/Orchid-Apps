let express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
app = express(),
dataperdaysaved = require('./config/config'),
port = 5000,
// uri = 'mongodb+srv://weedy0001:darina1985@cluster0-s8bfb.mongodb.net/test?retryWrites=true&w=majority',
// options = {
  
//   user:"weedy0001",
//   pass:"darina1985",
//   dbName:"wadadb",
//   useUnifiedTopology: true ,
//   useNewUrlParser: true
  
// };

uri = "mongodb://127.0.0.1:27017",
options={
  dbName:"wadadb",
  useUnifiedTopology: true ,
  useNewUrlParser: true
};

app.use(cors())
app.use(bodyParser.json({ limit:'50mb' }))
app.use(bodyParser.urlencoded({ limit:'50mb' , extended: true }))
app.use('/static', express.static('public'));

mongoose.connect(uri,options)
mongoose.set('useFindAndModify', false);

const connection = mongoose.connection;

connection
  .once(
    'open',
    ()=>{
      console.log('Mongodb database connection established ...')
    }
  )

let userRouter = require('./routes/users'),
 itemRouter = require('./routes/item'),
 typeRouter = require('./routes/type'),
 shopRouter = require('./routes/shop'),
 clientRouter = require('./routes/client');

app.use('/users',userRouter)
app.use('/items',itemRouter)
app.use('/types',typeRouter)
app.use('/shops',shopRouter)
app.use('/clients',clientRouter)
dataperdaysaved()

app.listen(
  port,
  ()=>{
    console.log('Server running ...')
  })