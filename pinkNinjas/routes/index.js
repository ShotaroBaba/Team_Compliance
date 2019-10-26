var express = require('express');
var router = express.Router();

//- Require controller modules
var user_controller = require('../controllers/userController');

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

module.exports = router;
