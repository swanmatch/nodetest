const { check, validationResult } = require('express-validator');

module.exports = [
  check('name')
    .not().isEmpty()
    .isLength({
      min: 5,
      max: 20
    }),
  check('login_id')
    .not().isEmpty()
    .isEmail(),
  check('password')
    .optional({checkFalsy:true})
    .isLength({
      min: 6,
      max: 10,
    })
    .withMessage('6~12文字で入力せよ'),
  check('password_confirm')
    .custom((value, { req }) => {
      if(req.body.password !== req.body.password_confirm) {
        throw new Error('パスワード（確認）と一致しません。');
      }
      return true;
    })
]
