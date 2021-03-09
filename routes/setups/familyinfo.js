var express = require("express");
var familyinfo = express();
var mysql = require("mysql");
var config = require("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
familyinfo.get("/", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call getfamilyinfo()";
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
familyinfo.get("/:ID", function (req, res) {
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
familyinfo.post("/", function (req, res) {
  const schema = Joi.object({
    parental_status: Joi.string().required(),
    parent_disability: Joi.string().required()
    

  });
  const validation = schema.validate(req.body);
   res.send(validation);
  
  if (!result.error) {
    let data = [
      req.body.parental_status,
      req.body.parent_disability,
      
    ];
    
    
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call savefamilyinfo(?,?)";
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
familyinfo.put("/:ID", function (req, res) {
  const schema = Joi.object().keys({
    arental_status: Joi.string().required(),
    parent_disability: Joi.string().required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.params.ID,
      req.body.arental_status,
      req.body.parent_disability,
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
        let sp = "call updatesfamilyinfo(?,?,?,?)";
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
familyinfo.delete("/:ID", function (req, res) {
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
      let sp = "call deletefamilyinfo(?,?)";
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
module.exports = familyinfo;
