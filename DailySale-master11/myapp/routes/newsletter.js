var express = require('express');
const mysql = require('mysql');
var router = express.Router();


// Select products display json
router.all('/signup/:email', (req, res) => {
  var email = req.params.email;
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  })

    var conn = db;
    let sql = 'INSERT INTO newsletter (email) VALUES (\''+ email +'\')';
    let query = db.query(sql, (err, results, fields) => {
     if (err) {
       console.error("Error signing up." + err)
     }else{
       console.log(email +" has been signed up to the newsletter.")
     }
    });

    res.end();
    conn.end();
});


module.exports = router;
