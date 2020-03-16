const db = require('../models/index.js');
const User = db.user;

exports.index = function(req, res) {
  let users = User.findAll({
    attributes: [
      'name',
      'login_id'
    ],
    limit: 25
  }).then( function(users) {
    res.render(
      'users/index',
      { users: users }
    );
  });
};
