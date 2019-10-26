var express = require('express');
var router = express.Router();

var { getData, create_user, createShift, getCurrentTimeSheet, getshifts } = require('../controllers/userController');

// //- Require controller modules
// var user_controller = require('../controllers/userController');

// DB models
var formModel = require('../database/storeData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pinkNinjas' });
});

router.post('/result', async (req, res) => {
  // console.log(req);
  try {

    const newUser = await create_user(req); 
    // console.log(newUser.data[0].id);
    const shifts = await getshifts(1145211);

    // store data in db
    let t = new formModel();
    t.name = req.body.name;
    t.email = req.body.email;
    t.dob = req.body.dateOfBirth;
    t.employee_startDate = req.body.employmentStartDate;
    t.modern_awards = req.body.modernAward;
    t.employmentStatus = req.body.employmentStatus;
    t.EmploymentLevel = req.body.levelEmployment;
    t.employee_id = 1145211;

    t.save(function(err){
      if (err) {
        console.log('Error saving to db: ', err);
      } else {
        console.log('Saved to db');
      }
    })

    var costs = [];
    shifts.data.forEach(function(element) {
      costs.push(element.cost);
    });

    var monfri = (costs[0] / 3).toFixed(2);
    var sat = (costs[1] / 3).toFixed(2);
    var sun = (costs[2] / 3).toFixed(2);

    console.log(monfri, sat, sun);

  } catch (err) {
    console.log(err);
    res.render('error', { message: "Error occurred saving to db", error: err })
  }

  res.render('result', { title: 'pinkNinjas',
                        name: 'TestPinkNinja Name',
                        base_rate: '15',
                        monfri_rate: '1.25',
                        sat_rate: '1.5',
                        sun_rate: '2.0',
                        publicholiday_rate: '2.5',
                        hourly_cost: '15',
                        monfri_cost: monfri, 
                        sat_cost: sat, 
                        sun_cost: sun, 
                        publicholiday_cost: '37.5'
                      });
});

module.exports = router;
