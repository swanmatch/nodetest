const express     = require('express');
const router      = express.Router();
const user_router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const users_controller = require('./controllers/users_controller');

// UserRouting.
user_router.get("/", users_controller.index);

// RootRouting.
router.get('/', function(req, res){
  res.send('hello world!!');
})

router.use('/users', user_router);
module.exports = router;
