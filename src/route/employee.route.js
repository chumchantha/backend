const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("../controller/employee.controller");

const employee = (app) => {
  app.get("/api/employee", getAll);
  app.get("/api/employee/:id", getOne);
  app.post("/api/employee", create);
  app.put("/api/employee", update);
  app.delete("/api/employee", remove);
};

module.exports = employee;
