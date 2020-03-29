const User = require('../models/index.js').user;
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

exports.index = (req, res) => {
  const per_page = 25;
  let options = {
    attributes: [
      'id',
      'name',
      'login_id'
    ],
    limit: per_page
  }
  if (req.query.page) {
    options.offset = (req.query.page - 1) * per_page;
  }
  User.findAll(options).then( ( users ) => {
    res.render(
      'users/index',
      { users: users }
    );
  });
};

exports.show = (req, res) => {
  User.findByPk(req.params.id).then( (user) => {
    res.render(
      'users/show',
      { user: user }
    );
  });
};

exports.new = (req, res) => {
  let user = {name: "", login_id: "", password: ""};
  console.log(user);
  res.render(
    'users/new',
    { user: user }
  );
};

exports.create = (req, res) => {
  let user = {
    name: req.body.name,
    login_id: req.body.login_id
  };
  const errors = validationResult(req);
  console.log(errors.array());
  if (errors.isEmpty()) {
    if (req.body.password) {
      user.password_crypt = bcrypt.hashSync(req.body.password, 10);
    }
    User.create(
      user
    ).then((user) => {
      res.redirect(`/users/${user.id}`);
    });
  } else {
    res.render(
      'users/new',
      {
        user: user,
        errors: errors.array(),
      }
    );
  }
};

exports.edit = (req, res) => {
  User.findByPk(req.params.id).then( (user) => {
    res.render(
      'users/edit',
      { user: user }
    )
  })
};

exports.update = (req, res) => {
  let user = {
    name: req.body.name,
    login_id: req.body.login_id
  };
  const errors = validationResult(req);
  console.log(errors.array());
  if (errors.isEmpty()) {
    if (req.body.password) {
      user.password_crypt = bcrypt.hashSync(req.body.password, 10);
    }
    User.update(
      user, {where: {id: req.params.id}}
    ).then(() => {
      res.redirect(`/users/${req.params.id}`);
    });
  } else {
    res.render(
      'users/edit',
      {
        user: user,
        errors: errors.array(),
      }
    );
  }
};

exports.delete = (req, res) => {
  console.log('delete');
  User.destroy(
    { where: { id: req.params.id } }
  ).then(() => {
    res.redirect('/users/');
  });
};
