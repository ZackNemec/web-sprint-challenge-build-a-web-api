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
})

module.exports = router;
