const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Calculate = require('./functions/calculate');
const CalculateRoutes = require('./routes/calculate');

const app = express();
const calculateFunctions = Calculate();
const routes = CalculateRoutes(calculateFunctions);

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', routes.home);

app.post('/calculate', routes.calculate);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server listening on PORT: ${PORT}...`);
});
