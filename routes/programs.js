var express = require('express');
var router = express.Router();
var programsCtrl = require('../controllers/programs')

/* GET users listing. */
router.get('/', programsCtrl.index);
router.get('/new', programsCtrl.new);
router.get('/:id', programsCtrl.show);
router.post('/', programsCtrl.create);


module.exports = router;
