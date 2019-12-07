'use strict';

const express = require('express');

const app = express();

app.use(express.static('./public'));

// route
app.get('/webpage', function(request, response) {
  response.send();
});

app.listen(3000, function() {
  console.log('aye you did it');
});

