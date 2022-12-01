const Program = require('../models/program');

module.exports = {
    create,
    edit,
    update,
    delete: deleteExercise
};

function create(req, res) {
    Program.findById(req.params.id, function(err, program) {
        program.exercises.push(req.body);
        program.save(function(err) {
            res.redirect(`/programs/${program._id}`);
        })
    })
}

function edit(req, res) {
    Program.findById(req.params.pId, function(err, program) {
        let exercise = program.exercises.id(req.params.eId)
        res.render('exercises/edit', {title: 'Edit a Exercise', program, exercise})
    })
}

function update(req, res) {
    Program.findById(req.params.pId, function(err, program) {
        program.exercises.id(req.params.eId).category = req.body.category
        program.exercises.id(req.params.eId).name = req.body.name
        program.exercises.id(req.params.eId).reps = req.body.reps
        program.exercises.id(req.params.eId).load = req.body.load
        program.exercises.id(req.params.eId).actual_reps = req.body.actual_reps
        program.exercises.id(req.params.eId).actual_load = req.body.actual_load
        program.save()
        res.redirect(`/programs/${req.params.pId}`)
    })
}

function deleteExercise(req, res) {
    Program.findById(req.params.pId, function(err, program) {
        program.exercises.id(req.params.eId).remove()
        program.save()
        res.redirect(`/programs/${req.params.pId}`)
    })
}