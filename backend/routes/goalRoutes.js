const express = require ('express')
const router = express.Router()
const { getGoals } = require('../controller/goalController')
const { setGoals } = require('../controller/goalController')
const { updateGoals } = require('../controller/goalController')
const { deleteGoals } = require('../controller/goalController')

router.route('/',).get(getGoals).post(setGoals)
router.route('/:id',).put(updateGoals).delete(deleteGoals)


module.exports = router