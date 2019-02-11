var express = require('express');
const mysql = require('mysql');
var router = express.Router();
var multer = require('multer');
const request = require('request');
const cheerio = require('cheerio');
var path = require('path');
const fs = require('fs');



// Select products display json
router.get('/LatestAdverts', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;

    let sql = 'SELECT * FROM adverts ORDER BY AID DESC LIMIT 4;';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });

});

// Select products display json
router.get('/get', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;

    let sql = 'SELECT * FROM adverts;';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });

});

router.get('/search', function(req, res){
  res.redirect("/advert/search/%20");
});

router.get('/search/:searchValue', function(req, res){

  var search = req.params.searchValue;
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;

    let sql = 'SELECT * FROM adverts WHERE Name LIKE \'%'+search+'%\' OR Description LIKE \'%'+search+'%\';';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.render("adverts.ejs", {Logged: req.session.success ,Username: req.session.username,img: req.session.img ,results: results});
        conn.end();
    });
});


const writeStream = fs.createWriteStream('Scrape1.txt');

router.get('/Scrape', function(req, res){
  request('https://www.donedeal.ie/animals?area=&campaign=14', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $('.card-item').each((i, el) => {
        var title = $(el)
          .find('.card__body-title')
          .text();

        var img = $(el)
            .find('.card__photo')
            .find('img')
            .attr('src');

        var desc = "this is test data";

        var location = $(el)
            .find('.card__adinfo card__adinfo--is-grid-only')
            .find('li')[0];

        var price = $(el)
            .find('.card__price')
            .text();


        writeStream.write(` xxx  ' ${title} ' , ' ${img} ',' ${desc} ', '${location} ', '${price}' xx \n`);
      });
    }
  });
  res.send("Done");
});

router.get('/:advertID', function(req, res){
  console.log("Advert page route");
  var advertID = req.params.advertID;

  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;

    let sql = "SELECT * FROM adverts INNER JOIN users ON adverts.UID = users.ID WHERE AID = "+ advertID +";"
    let query = db.query(sql, (err, results, fields) => {
        if(err) throw err;
        var views = results[0].Views;
        req.session.views++;
        views = views + req.session.views;
        console.log(views);
        let sqlUpdate =  "UPDATE adverts SET Views=" + views + " WHERE AID =" + results[0].AID + "";
        let query = db.query(sqlUpdate, (err, Updateresults, fields) => {
         if (err) {
         }
            let sql = "SELECT * FROM comments INNER JOIN users ON users.id = comments.uid WHERE adid = "+ advertID +";"
            let query = db.query(sql, (err, commentresults, fields) => {
                if(err) throw err;
                console.log(commentresults);
                res.render("advertFullPage.ejs", {Logged: req.session.success , img: req.session.img, results: results,commentresults: commentresults,img :req.session.img,Username: req.session.Username, Views: views});
                conn.end();
        });
        });
        req.session.views = 0;
    });
});

router.post('/post', function(req, res, next){
    // Create connection
    const db = mysql.createConnection({
      host     : '****',
      user     : '***',
      password : '****',
      database : '****'
    });
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();


    var conn = db;

    var ad = req.body.AdvertId;
    var user = req.session.UID;
    var comments = req.body.Comment;
    var time = "" + hour + ":" + min;

    console.log(ad);
    console.log(user);
    console.log(comments);
    console.log(time);

    let sql =  'INSERT INTO comments (AdID, UID , Comments , time ) VALUES (?,?,?,? )';
    let todo = [ad , user , comments , time];
    let query = db.query(sql,todo, (err, results, fields) => {
     if (err) {
     }
     res.send(JSON.stringify({"Signed": true }));
     conn.end();
     });
});



// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/Upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){      res.render('addItem', {
        msg: err ,Logged: req.session.success ,Username: req.session.username,img: req.session.img
      });
    } else {
      if(req.file == undefined){
        res.render('addItem', {
          msg: 'Error: No File Selected!' ,Logged: req.session.success ,Username: req.session.username,img: req.session.img
        });
      } else {
        console.log(req.file);
        var conn = db;

        var title = req.body.title;
        var desc =req.body.Description;
        var loc ="Dublin";
        var price =req.body.Price;
        var time ='5:50';
        var uid =  req.session.UID;
        console.log(uid);

        let sql = 'INSERT INTO adverts (Name, Img , Description , Location , Price , time , UID ) VALUES (?,?,?,?,?,?,?)';
        let todo = [title , req.file.filename , desc , loc , price , time , uid];
        let query = db.query(sql,todo, (err, results, fields) => {

         if (err) {
         }else{
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}` , Logged: req.session.success ,Username: req.session.username,img: req.session.img
        });
        }
        conn.end();
      });
      }
    }
  });


});
module.exports = router;
