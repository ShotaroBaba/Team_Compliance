
var  UserInstance = require('../models/form');
import Tanda from 'tanda';
import Axios from 'axios';
const tanda = new Tanda({ authToken: '18c156faf12d5ab58c8e9bf79f03538b18f60a12f970a47f5e09103256ad8a82' });

// var  UserInstance = require('../models/form');


// // Display list of users
exports.user_instance_list = function(req, res) {
  res.send('NOT IMPLEMENTED: UserInstance list');
};

exports.create_user = function(req, res) {
  const Url='https://my.tanda.co/api/v2/users';
  const params={
    name: req.body.name,
    date_of_birth: req.body.dateOfBirth,
    employment_start_date: req.body.employmentStartDate,
    email: req.body.email,
    award_template_id: req.body.modernAward,
    award_tag_ids: req.body.employmentStatus
  }
  axios({
    method: 'post',
    url: Url,
    data: {
      params
    }
  })
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
};