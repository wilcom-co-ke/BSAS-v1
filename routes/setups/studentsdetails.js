var express = require("express");
var studentsdetails = express();
var mysql = require("mysql");
var config = require("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
studentsdetails.get("/", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call getstudentsdetails()";
      connection.query(sp, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          res.json(results[0]);
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
studentsdetails.get("/:ID", function (req, res) {
  const ID = req.params.ID;
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    // else {
    //   let sp = "call getonebasicinfo(?)";
    //   connection.query(sp, [ID], function (error, results, fields) {
    //     if (error) {
    //       res.json({
    //         success: false,
    //         message: error.message,
    //       });
    //     } else {
    //       res.json(results[0]);
    //     }
    //     connection.release();
    //     // Don't use the connection here, it has been returned to the pool.
    //   });
    // }
  });
});
studentsdetails.post("/", function (req, res) {
  const schema = Joi.object({
    fullnames: Joi.string().required(),
    dob: Joi.string().required(),
    adminnumber: Joi.string().required(),
    gender: Joi.string().required(),
    class: Joi.string().required(),
    schoolname: Joi.string().required(),
    disability: Joi.string().required(),
    year: Joi.string().required(),
    completionenddate: Joi.string().required()

  });
  const validation = schema.validate(req.body);
   res.send(validation);
  
  if (!result.error) {
    let data = [
      req.body.fullnames,
      req.body.dob,
      req.body.adminnumber,
      req.body.gender,
      req.body.class,
      req.body.schoolname,
      req.body.disability,
      req.body.year,
      req.body.completionenddate,
      res.locals.user,
    ];
    
    
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call savestudentsdetails(?,?,?,?,?,?,?,?,?,?)";
        connection.query(sp, data, function (error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            res.json({
              success: true,
              message: "saved",
            });
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message,
    });
  }
});
studentsdetails.put("/:ID", function (req, res) {
  const schema = Joi.object().keys({
    fullnames: Joi.string().required(),
    dob: Joi.string().required(),
    adminnumber: Joi.string().required(),
    gender: Joi.string().required(),
    class: Joi.string().required(),
    schoolname: Joi.string().required(),
    disability: Joi.string().required(),
    year: Joi.string().required(),
    completionenddate: Joi.string().required(),
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.params.ID,
      req.body.fullnames,
      req.body.dob,
      req.body.adminnumber,
      req.body.gender,
      req.body.class,
      req.body.schoolname,
      req.body.disability,
      req.body.year,
      req.body.completionenddate,
      res.locals.user,
    ];
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call updatestudentsdetails(?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sp, data, function (error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            res.json({
              success: true,
              message: "updated",
            });
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message,
    });
  }
});
studentsdetails.delete("/:ID", function (req, res) {
  const ID = req.params.ID;
  let data = [ID, res.locals.user];
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call deletestudentsdetails(?,?)";
      connection.query(sp, data, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          res.json({
            success: true,
            message: "Deleted Successfully",
          });
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
module.exports = studentsdetails;
