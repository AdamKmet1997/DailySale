var express = require('express');
const mysql = require('mysql');
var router = express.Router();


// Select products display json
router.get('/:profileID', (req, res) => {
  var user = req.params.profileID;
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;

    let sql = 'SELECT * FROM users WHERE username=\"'+user+ '\"';
    console.log("Profile query: " +sql);

    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        //res.send(results);
        let sql = 'SELECT * FROM reviews INNER JOIN users ON users.username = reviews.Uuser WHERE users.username=\"'+user+ '\"';
let query = db.query(sql, (err, reviewsresults, fields) => {
    if(err) throw err;
    console.log(reviewsresults);

        res.render('profile.ejs', {Logged: req.session.success, user: results[0] ,reviewsresults: reviewsresults,Username: req.session.username,img: req.session.img})
        conn.end();
      });
    });
});

module.exports = router;
