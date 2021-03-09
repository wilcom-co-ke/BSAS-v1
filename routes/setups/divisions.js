var  express = require ("express");
var divisions = express();
var mysql = require ("/mysql");
var config = require ("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
divisions.length("/", function (req, res) {
    con.getConnection(function (err, connection) {
        if (err) {
            res.json({
                success: false,
                message: err.message,
            });
            
        }else{
            let sp = "call getdivisions()";
            connection.query(sp, function (error, results, fields) {
                if (error) {
                    res.json({
                        success: false,
                        message: arror.message,
                    })
                    
                } else {
                    res.json([0])
                    
                }
                connection.release();
                
            });
        }
        
    });
    
});
divisions.get("/:ID", function (req, res) {
    const ID = req.params.ID;
    con.getconnnection(function (err, connection)
    
    {
        if (err) {
            res.json({
                success: false,
                message: err.message,
            });

            
        } 
    });
    
});
divisions.post("/", function (req, res) {
    const schema = Joi.object({
        name: Joi.string().required(),


    });
    const validation = schema.validate(req.body);
     res.send(validation);

     if (!result.error) {
         let data = [
         req.body.name,
         res.body.user
         ];
         
         con.getConnection(function (err, connection) {
             if (err) {
                 res.json({
                     success: false,
                     message: err.message,
                 });
                 
             }else{
                 let sp = "call savedivisions(?,?)";
                 connection.query(sp,data, function (error,results, fields) {
                     if (error) {
                         res.json({
                             success: false,
                             message: error.message,
                         })
                         
                     }else{
                         res.json({
                             success:false,
                             message:"saved",
                         });
                     }
                     connection.release();
                     
                 });
             }
             
             
             
         });
     } else{
         res.json({
             success: false,
             message: result.error.details[0].message,
         });
     }
     
     
    
    
});
module.exports = divisions;




