const asynchHandler = require('express-async-handler')
const Goal = require('../models/goalModels')

//@desc   Get Goals
//@route  GET /api/goals
//@access private
const getGoals = asynchHandler(async(req, res) => {

    const goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc   Set Goals
//@route  Set /api/goals
//@access private
const setGoals = asynchHandler(async(req, res) => {
    if (!req.body.Name) {
        res.status(400)
        throw new Error('please add a name')
    }
    if (!req.body.Dob) {
        res.status(400)
        throw new Error('please add a date of birth')
    }
    if (!req.body.Gender) {
        res.status(400)
        throw new Error('please add a gender')
    }
    if (!req.body.Salary) {
        res.status(400)
        throw new Error('please add a salary')
    }

    const goal = await Goal.create({
        Name: req.body.Name,
        DateOfBirth: req.body.Dob,
        Gender: req.body.Gender,
        Salary: req.body.Salary,
    })

    res.status(200).json(goal)
})

//@desc   Update Goals
//@route  Update /api/goals
//@access private
const updateGoals = asynchHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoals)
})

//@desc   Delete Goals
//@route  Delete /api/goals
//@access private
const deleteGoals = asynchHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const deleteGoals = await Goal.remove(goal)
    res.status(200).json(deleteGoals)
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals

}