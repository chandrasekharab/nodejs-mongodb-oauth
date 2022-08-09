const express = require('express');
const mongoose = require('mongoose');
const Experiment = require('./models/experiment');

const app = express();
const port = 3010;

const dbURI = "";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server started...${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/record', (req, res) => {
  const exp = new Experiment({
    title: "First experiment 1",
    roi: "minimal",
    details: "coollll....dfdfdf12122"
  });

  exp.save()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      res.send(err);
    });
});


