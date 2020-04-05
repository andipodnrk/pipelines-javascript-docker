'use strict';

const express = require('express');
const { HealthCheck } = require('@nrk/healthcheck');

const PORT = 80;
const HOST = '0.0.0.0';
const health = new HealthCheck('pipeline-test', {});

const app = express();

app.get('/health', (req, res) => {
  const report = health.report();
  if (report.status === 'failed') {
    res.status(500);
  } else {
    res.status(200);
  }
  res.send(health.report());
}
);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);