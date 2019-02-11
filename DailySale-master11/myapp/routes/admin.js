var express = require('express');
const mysql = require('mysql');
var router = express.Router();
var multer = require('multer');
const request = require('request');
const cheerio = require('cheerio');
var path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admin', { Logged: req.session.success ,Username: req.session.username,img: req.session.img });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard.ejs', { Logged: req.session.success ,Username: req.session.username,img: req.session.img });
});

router.get('/dashboard/newsletter', function(req, res, next) {
  res.render('newsletter.ejs', { Logged: req.session.success ,Username: req.session.username,img: req.session.img });
});

router.post('/dashboard/newsletter/send', function(req, res, next) {
  //USE NODEMAILER HERE TO SEND NEWSLETTERS OUT
});
module.exports = router;
