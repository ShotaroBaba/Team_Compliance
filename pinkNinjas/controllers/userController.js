var axios = require('axios');

const callHeader =
  {
    "Authorization": "Bearer 18c156faf12d5ab58c8e9bf79f03538b18f60a12f970a47f5e09103256ad8a82",
    "Content-Type": "application/json"
  }

async function create_user(req) {
  // console.log(req.body);
  const params={
    name: req.body.name,
    date_of_birth: req.body.dateOfBirth,
    employment_start_date: req.body.employmentStartDate,
    email: req.body.email,
    award_template_id: req.body.modernAward,
    award_tag_ids: req.body.employmentStatus
  }
  try {
    const response = await axios.get(`https://my.tanda.co/api/v2/users`, { params: params, headers: callHeader })
    return response;
  } catch (err) {
    console.log(err);
  }
};


async function getData(endpoint) {
  try {
    const response = await axios.get(`https://my.tanda.co/api/v2/${endpoint}`, { headers: callHeader })
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function createShift(user_id, date, start, finish, status) {

  // console.log(data.body);
  var startTime = new Date(`${data.body.date}T${data.body.start}`).getTime() / 1000;
  var finishTime = new Date(`${data.body.date}T${data.body.finish}`).getTime() / 1000;

  // console.log(startTime, finishTime);
  const params={
    user_id: user_id,
    date: date,
    start: start,
    finish: finish,
    status: status
    // metadata: data.body.me
  }
  try {
    const response = await axios.post(`https://my.tanda.co/api/v2/shifts`, { params: params,
      headers: {
        "Authorization": "Bearer 18c156faf12d5ab58c8e9bf79f03538b18f60a12f970a47f5e09103256ad8a82",
        "Content-Type": "application/json"
      } })
    return response;
  } catch (err) {
    console.log(err);
  }
}

// functionality for timesheets (which we're not doing)
// async function createShifts(user_id, date, start, finish, status) {
//   const Url='https://my.tanca.co/api/v2/shifts';
//   const params={
//     user_id: user_id,
//     date: date,
//     start: start,
//     finish: finish,
//     status: "APPROVED"
//   }
//   axios({
//     method: 'post',
//     url: Url,
//     params: params,
//     headers: callHeader
//   })
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))
// };

module.exports = { getData, create_user, createShift };
