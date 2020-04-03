import express from 'express';
import mongoose from 'mongoose';
import Router from './router';

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', Router);

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stfuandclick');
});

