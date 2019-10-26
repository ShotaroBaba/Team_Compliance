var express = require('express');
var router = express.Router();

// DB models
var formModel = require('../database/storeData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/result', function(req, res) {
  console.log(req.body);
  try {

    // store data in db
    let t = new formModel();
    t.name = req.body.name;
    t.email = req.body.email;
    t.dob = req.body.dateOfBirth;
    t.employee_startDate = req.body.employmentStartDate;
    t.modern_awards = req.body.modernAward;
    t.employmentStatus = req.body.employmentStatus;
    t.EmploymentLevel = req.body.levelEmployment;

    t.save(function(err){
      if (err) {
        console.log('Error saving to db: ', err);
      } else {
        console.log('Saved to db');
      }
    })

  } catch (err) {
    res.render('error', { message: "Error occured saving to db", error: err })
  }
  
  res.render('result', { title: 'result'});
});

module.exports = router;
