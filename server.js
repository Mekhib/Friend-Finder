var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/htmlRoutes")(app);
require('./routing/apiRoutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});