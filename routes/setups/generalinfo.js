var express = require("express");
var generalinfo = express();
var mysql = require("mysql");
var config = require("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
generalinfo.get("/", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call getbasicinfo()";
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
generalinfo.get("/:ID", function (req, res) {
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
generalinfo.post("/", function (req, res) {
  const schema = Joi.object({
    year: Joi.string().required(),
    constituency: Joi.string().required(),
    subcounty: Joi.string().required(),
    division: Joi.string().required(),
    location: Joi.string().required(),
    sublocation: Joi.string().required(),
    ward: Joi.string().required(),
    village: Joi.string().required()
  });
  const validation = schema.validate(req.body);
   res.send(validation);
  
  if (!result.error) {
    let data = [
      req.body.year,
      req.body.constituency,
      req.body.subcounty,
      req.body.division,
      req.body.location,
      req.body.sublocation,
      req.body.ward,
      req.body.village,
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
        let sp = "call savebasicinfo(?,?,?,?,?,?,?,?,?)";
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
generalinfo.put("/:ID", function (req, res) {
  const schema = Joi.object().keys({
    year: Joi.string().required(),
    constituency: Joi.string().required(),
    subcounty: Joi.string().required(),
    division: Joi.string().required(),
    location: Joi.string().required(),
    sublocation: Joi.string().required(),
    ward: Joi.string().required(),
    village: Joi.string().required(),
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.params.ID,
      req.body.constituency,
      req.body.subcounty,
      req.body.division,
      req.body.location,
      req.body.sublocation,
      req.body.ward,
      req.body.village,
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
        let sp = "call updatebasicinfo(?,?,?,?,?,?,?,?,?)";
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
generalinfo.delete("/", function (req, res) {
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
      let sp = "call deletebasicinfo(?,?)";
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
module.exports = generalinfo;
