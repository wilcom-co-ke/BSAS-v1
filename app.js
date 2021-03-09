var express = require("express");
var cors = require("cors");
var app = express();
var winston = require("winston");
var bodyParser = require("body-parser");
var auth = require("./auth");

//var DataTables = require( 'datatables.net-dt' );

//var sms = require("./Routes/SMS/sms");
//setups

var generalinfo = require("./routes/setups/generalinfo");
var familyinfo = require("./routes/setups/familyinfo");
var studentsdetails = require("./routes/setups/studentsdetails");
var siblingsdetails = require("./routes/setups/siblingsdetails");

// var Csv = require("./Routes/Reports/Csv");
// var fs = require("fs");
var morgan = require("morgan");


// var accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
//   flags: "a",
// });
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.json());

// app.use(express.static("uploads"));
// app.use(express.static("Templates"));
app.use("/api/generalinfo", generalinfo);
app.use("/api/familyinfo", familyinfo);
app.use("/api/studentsdetails", studentsdetails);
app.use("/api/siblingsdetails", siblingsdetails);


//app.use("/api/ValidateTokenExpiry", ValidateTokenExpiry);
//app.use("/AuthToken", auth.router);


app.use((req, res, next) => {
  const error = new Error("resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const logger = winston.createLogger({
    transports: [new winston.transports.File({ filename: "combined.log" })],
  });
  logger.info(new Date().toLocaleString());
  logger.info(req.body);

  res.status(error.status || 500);
  // res.json({
  //   error: {
  //     message: error.message,
  //   },
  // });
});

module.exports = app;
