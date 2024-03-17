const db = require("../util/ds");

const getAll = (req, res) => {
  db.query("SELECT * FROM `employee2`", (error, rows) => {
    if (!error) {
      res.json({
        list: rows,
      });
    } else {
      res.json({
        error: true,
        message: error,
      });
    }
  });
};

const getOne = (req, res) => {
  const { id } = req.params;
  var sql = "SELECT * FROM `employee2` WHERE employee_id=?";
  var param = [id];
  db.query(sql, param, (error, rows) => {
    if (!error) {
      res.json({
        list: rows,
      });
    } else {
      res.json({
        error: true,
        message: error,
      });
    }
  });
};

const create = (req, res) => {
  const { Firstname, LastName, Gender, DOB, Email, Tel, Address, Role } =
    req.body;

  var sql =
    "INSERT INTO employee2 (Firstname, LastName, Gender, DOB, Email, Tel, Address, Role) VALUE (?,?,?,?,?,?,?,?)";

  var param = [Firstname, LastName, Gender, DOB, Email, Tel, Address, Role];
  db.query(sql, param, (error, rows) => {
    if (!error) {
      res.json({
        message: rows.AffectedRows != 0 ? "Insert success" : "Insert fail",
        data: rows,
      });
    } else {
      res.json({
        error: "true",
        message: error,
      });
    }
  });
};

const remove = (req, res) => {
  const { Id } = req.body;
  var sql = "DELETE FROM employee2 WHERE employee_id=?";
  var param = [Id];
  db.query(sql, param, (error, rows) => {
    if (!error) {
      res.json({
        message: rows.AffectedRows != 0 ? "remove success" : "remove failed",
        data: rows,
      });
    } else {
      res.json({
        error: "true",
        message: error,
      });
    }
  });
};

const update = (req, res) => {
  const { Firstname, LastName, Gender, DOB, Email, Tel, Address, Role, Id } =
    req.body;
  var sql =
    "UPDATE employee2 SET Firstname=?, LastName=?, Gender=?, DOB=?, Email=?, Tel=?, Address=?, Role=? WHERE employee_id=?";
  var param = [Firstname, LastName, Gender, DOB, Email, Tel, Address, Role, Id];
  db.query(sql, param, (error, rows) => {
    if (!error) {
      res.json({
        message: rows.AffectedRows != 0 ? "update success" : "update failed",
        data: rows,
      });
    } else {
      res.json({
        error: "true",
        message: error,
      });
    }
  });
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
