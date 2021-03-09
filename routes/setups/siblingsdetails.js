var express = require("express");
var siblingsdetails = express();
var mysql = require("mysql");
var config = require("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
siblingsdetails.get("/", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call getsiblingsinfo()";
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
siblingsdetails.get("/:ID", function (req, res) {
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
siblingsdetails.post("/", function (req, res) {
  const schema = Joi.object({
    name: Joi.string().required(),
    institution: Joi.string().required(),
    year_of_study: Joi.string().required(),
    total_fees: Joi.string().required(),
    fees_paid: Joi.string().required()
   

  });
  const validation = schema.validate(req.body);
   res.send(validation);
  
  if (!result.error) {
    let data = [
      req.body.name,
      req.body.institution,
      req.body.year_of_study,
      req.body.total_fees,
      req.body.fees_paid,
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
        let sp = "call savesiblingsinfo(?,?,?,?,?,?)";
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
siblingsdetails.put("/:ID", function (req, res) {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    institution: Joi.string().required(),
    year_of_study: Joi.string().required(),
    total_fees: Joi.string().required(),
    fees_paid: Joi.string().required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.params.ID,
      req.body.name,
      req.body.institution,
      req.body.year_of_study,
      req.body.total_fees,
      req.body.fees_paid,
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
        let sp = "call updatesiblingsinfo(?,?,?,?,?,?,?)";
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
siblingsdetails.delete("/:ID", function (req, res) {
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
      let sp = "call deletesiblingsinfo(?,?)";
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
module.exports = siblingsdetails;
