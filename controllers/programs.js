const Program = require('../models/program')

module.exports = {
    index,
    show,
    new: newProgram,
    create,
}

function index(req, res) {
    Program.find({}, function(err, programs) {
        res.render('programs/index', {programs: programs})
    });
}

function show(req, res) {
    Program.findById(req.params.id, function(err, program) {
        res.render('programs/show', { program: 'Program Detail', program})
        });
};

function newProgram(req, res) {
    res.render('programs/new')
}

function create(req, res) {
    Program.create(req.body, function(err, program) {
        res.redirect(`/programs/${program._id}`)
    })
}
