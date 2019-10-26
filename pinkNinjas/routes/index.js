var express = require('express');
var router = express.Router();


//- Require controller modules
var user_controller = require('../controllers/userController');
=======
// DB models
var formModel = require('../database/storeData');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pinkNinjas',
                        name: 'TestPinkNinja Name',
                        base_rate: '15',
                        monfri_rate: '1.25',
                        sat_rate: '1.5',
                        sun_rate: '2.0',
                        publicholiday_rate: '2.5',
                        hourly_cost: '15',
                        monfri_cost: '18.75',
                        sat_cost: '22.5',
                        sun_cost: '30',
                        publicholiday_cost: '37.5'
                      });
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
