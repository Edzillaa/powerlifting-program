const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises')

router.post('/programs/:id/exercises', exercisesCtrl.create);
router.get('/programs/:pId/exercises/:eId', exercisesCtrl.edit);
router.put('/programs/:pId/exercises/:eId', exercisesCtrl.update)
router.delete('/programs/:pId/exercises/:eId', exercisesCtrl.delete)

module.exports = router;