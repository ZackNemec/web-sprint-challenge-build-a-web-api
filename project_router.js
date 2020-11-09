const express = require('express');

const projects = require('./data/helpers/projectModel.js');

const router =express.Router();

router.get('/', (req, res) => {
projects
.get(req.id)
.then(e => {
res.status(200).json(e)
})
.catch(err => {
console.log(err);
res.status(500).json({error: "error getting projects"})
})
});


router.post('/', (req, res) => {
    const newProject = req.body
projects
.insert(newProject)
.then(() => {
res.status(201).json({message: `project created`})
})
.catch(err => {
res.status(500).json({error: "can not create project right now"})
})
});

router.put("/:id", (req, res) => {
const upProject = req.body;
const {id} = req.params;
projects
.update(id, projects)
.then(() => {
res.status(200).json(upProject);
})
.catch(err => {
console.log(err);
res.status(500).json({
    error: "The project information could not be modified."
})
})
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    projects
    .remove(id)
    .then(e => {
    res.status(200).json(e);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({error: "The projects could not be removed"});
    })
    })

router.get( '/:id/actions', (req, res) => {
projects
.getProjectActions(req.params.id)
.then(e => {
res.status(200).json(e)
})
.catch(err => {
    console.log(err);
    res.status(500).json({error: "could not get project actions"});
    })
})

module.exports = router;
