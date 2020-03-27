const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
/**app.use(cors({
  origin: "http:site"
}));
//controla quais url podem acessar a api
**/
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
