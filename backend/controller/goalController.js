const asynchHandler = require('express-async-handler')

//@desc   Get Goals
//@route  GET /api/goals
//@access private
const getGoals = asynchHandler(async(req, res) => {
    res.status(200).json({ message: 'Get Goals'})
})

//@desc   Set Goals
//@route  Set /api/goals
//@access private
const setGoals = asynchHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({ message: 'Set Goals'})
})

//@desc   Update Goals
//@route  Update /api/goals
//@access private
const updateGoals = asynchHandler(async(req, res) => {
    res.status(200).json({ message: 'Update Goals'})
})

//@desc   Delete Goals
//@route  Delete /api/goals
//@access private
const deleteGoals = asynchHandler(async(req, res) => {
    res.status(200).json({ message: 'Delete Goals'})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals

}