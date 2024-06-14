var mysql = require('mysql2');

var sqlconnection = mysql.createConnection({
  host: "mysqlsever3400.mysql.database.azure.com",
  user: "sqladmin5000",
  password: "Tadiwalesley1234$",
  database: "appdb"
});

sqlconnection.connect((error)=> {
  if (error) console.log(error);
  else
  {
    console.log("Connected to the MySQL database");
    var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";
    sqlconnection.query(sqlquery,function(error,result) {
        console.log(result);
    });
  }
});
