const express = require('express');
const axios = require('axios');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

// INITIALIZE EXPRESS
const app = express();

//  ALLOW CROSS-ORIGIN
app.use(cors());

// ROUTES
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// PORT
const PORT = process.env.PORT || 5000;

// LISTEN FOR SERVER
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
