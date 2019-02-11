var express = require('express');
const mysql = require('mysql');
var router = express.Router();
var session = require('express-session');

/* GET users listing. */
router.get('/:Username', function(req, res) {
  // Create connection
  const db = mysql.createConnection({
            host     : '****',
            user     : '***',
            password : '****',
            database : '****'
  });
  var conn = db;

  console.log(req.session.success);
  if(req.session.success == true && req.session.username == req.params.Username){
      console.log(req.session.username);
    let sql = `SELECT * FROM users WHERE username = "${req.params.Username}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('index', { Logged: req.session.success ,Username: req.session.username,img: req.session.img});
        conn.end();
    });
}else{
    res.send("error");
    conn.end();
  }
});



module.exports = router;
