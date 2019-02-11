var express = require('express');
const mysql = require('mysql');
var router = express.Router();

// Select products display json
router.get('/Adverts', (req, res) => {
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

// Select products display json
router.get('/Adverts/Desc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = 'SELECT * FROM adverts ORDER BY aid Desc;';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/Asc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = 'SELECT * FROM adverts ORDER BY aid Asc;';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/:ID/GetImages', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql =  `SELECT Img FROM adverts WHERE aid = "${req.params.ID}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/:ID/GetComments', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql =  `SELECT * FROM comments WHERE Adid = "${req.params.ID}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/PriceDesc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts ORDER BY Price Desc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/PriceAsc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts ORDER BY Price Asc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/max/:MaxPrice', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price < "${req.params.MaxPrice}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/max/:MaxPrice/PriceAsc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price < "${req.params.MaxPrice}" ORDER BY Price Asc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/max/:MaxPrice/PriceDesc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price < "${req.params.MaxPrice}" ORDER BY Price Desc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});


// Select products display json
router.get('/Adverts/min/:minPrice', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/min/:minPrice/PriceAsc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}" ORDER BY Price Asc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/min/:minPrice/PriceDesc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}" ORDER BY Price Desc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/min/:minPrice/max/:MaxPrice', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}" AND Price < "${req.params.MaxPrice}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/min/:minPrice/max/:MaxPrice/PriceAsc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}" AND Price < "${req.params.MaxPrice}" ORDER BY Price Asc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/min/:minPrice/max/:MaxPrice/PriceDesc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts where Price > "${req.params.minPrice}" AND Price < "${req.params.MaxPrice}" ORDER BY Price Desc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});


// Select products display json
router.get('/Adverts/:County', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts WHERE location = "${req.params.County}"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/:County/PriceAsc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts WHERE location = "${req.params.County}" ORDER BY Price Asc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

// Select products display json
router.get('/Adverts/:County/PriceDesc', (req, res) => {
  // Create connection
  const db = mysql.createConnection({
    host     : '****',
    user     : '***',
    password : '****',
    database : '****'
  });
  var conn = db;
    let sql = `SELECT * FROM adverts WHERE location = "${req.params.County}" ORDER BY Price Desc`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
        conn.end();
    });
});

module.exports = router;
