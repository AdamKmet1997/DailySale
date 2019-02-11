var express = require('express');
const mysql = require('mysql');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var os = require('os');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Logged: req.session.success ,Username: req.session.username,img: req.session.img });
});

/* GET Add item page. */
router.get('/addItem', function(req, res, next) {
  res.render('addItem', { Logged: req.session.success ,Username: req.session.username,img: req.session.img });
});

/* GET view Profile page. */
router.get('/Profile', function(req, res, next) {
  res.render('Profile',{ Logged: req.session.success ,Username: req.session.username,img: req.session.img });

});

router.post('/Login', function(req, res, next) {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });

  var conn = db;

  var user_name=req.body.Username;
  var pass_word=req.body.Password;
  console.log(pass_word);

 let sql = 'SELECT * FROM users WHERE username = "'+ user_name +'" and password ="'+ pass_word +'"';
console.log(sql);
 let query = db.query(sql, (err, results, fields) => {
       if(err) throw err;
       numRows = results.length;
       console.log(numRows);
       if(numRows == 1){
         req.session.username = results[0].username;
         req.session.UID = results[0].id;
         req.session.img = results[0].ProfilePic;
       let sql = 'SELECT access FROM users WHERE username = "'+ user_name +'" and password ="'+ pass_word +'"';
       let query = db.query(sql, (err, result, fields) => {
         req.session.success = true;
         res.send(JSON.stringify({"Username": ""+ req.session.username +"", "Logged": true }));
         conn.end();
        });
       }
       if(numRows == 0){
        req.session.success = false;
        res.send(JSON.stringify({"Error": true, "Logged": false }));
        conn.end();
       }
   });
});


router.post('/Sign', function(req, res, next) {
    // Create connection
    const db = mysql.createConnection({
      host     : '****',
      user     : '***',
      password : '****',
      database : '****'
    });
    var conn = db;

    var username = req.body.Usernamez;
    var name =req.body.FirstName;
    var lname =req.body.LastName;
    var email =req.body.Email;
    var password =req.body.Passwordz;
    var address =req.body.Address;
    var address1 =req.body.Address1;
    var city =req.body.City;
    var counties = req.body.Counties;
    var img ='images/Generic_Pro_Pics/'+ name.charAt(0) + '.png';


    let sql = 'INSERT INTO users (username, email , password , firstname , lastname , ProfilePic, address , address1, City, County) VALUES (?,?,?,?,?,?,?,?,?,?)';
    let todo = [username , email , password , name , lname , img , address , address1 , city , counties];
    let query = db.query(sql,todo, (err, results, fields) => {
     if (err) {
     }
     res.send(JSON.stringify({"Signed": true }));
     conn.end();
     });
});

router.get('/Logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
