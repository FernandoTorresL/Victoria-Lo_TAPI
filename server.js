const express = require ('express');
const routes = require('./routes/tea'); // import the routes
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

const app = express();

app.use(helmet());
app.use(compression());

app.use('/uploads', express.static('./uploads'));

app.use(express.json());
app.use('/', routes); // to use the routes

// Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

//establish connection to database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } },
  },
  function (err) {
      if (err) return console.log("Error: ", err);
      console.log(
        "MongoDB Connection -- Ready state is:",
        mongoose.connection.readyState
      );
  }
);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
