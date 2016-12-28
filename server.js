
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

const shoppingListRouter = require('./routes/shoppingList');
const recipesRouter = require('./routes/recipes');

// log the http layer
app.use(morgan('common'));

// our HTTP METHOD handlers
app.use('/shopping-list', shoppingListRouter);
app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
