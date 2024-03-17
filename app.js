const express = require("express");
const app = express();

app.use(express.json());

const employee = require("./src/route/employee.route");
const customer = require("./src/route/customer.route");

employee(app);
customer(app);

var port = 8081;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
