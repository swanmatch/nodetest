const express     = require('express');
const router      = express.Router();
const user_router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const users_controller = require('./controllers/users_controller');
// ???
const user_validator = require('./validators/user_validator');
const user_create_validator = require('./validators/user_create_validator');

// UserRouting.
user_router.get(
  "/", users_controller.index
).get(
  "/new", users_controller.new
).get(
  "/:id", users_controller.show
).post(
  "/",
  user_create_validator,
  users_controller.create
).get(
  "/:id/edit", users_controller.edit
).post(
  "/:id",
  user_validator,
  users_controller.update
).get(
  "/:id/delete",
  users_controller.delete
);

// RootRouting.
router.get('/', (req, res) => {
  res.send('hello world!!');
})

router.use('/users', user_router);
module.exports = router;
