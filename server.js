'use strict';

const express = require('express');

const app = express();

app.use(express.static('./public'));

// route
app.get('/webpage', function(request, response) {
  response.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  
});

