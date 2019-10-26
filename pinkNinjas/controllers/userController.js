var axios = require('axios');

// // Display list of users
exports.user_instance_list = function(req, res) {
  res.send('NOT IMPLEMENTED: UserInstance list');
};


async function getData(endpoint) {
  try {
    const response = await axios.get(`https://my.tanda.co/api/v2/${endpoint}`,
      {
        headers: 
        {
          "Authorization": "Bearer 18c156faf12d5ab58c8e9bf79f03538b18f60a12f970a47f5e09103256ad8a82",
          "Content-Type": "application/json"
        }
      }
    )
    return response;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getData };