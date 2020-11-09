const express = require('express');

const actions = require('./data/helpers/actionModel.js');

const router =express.Router();

router.get('/', (req, res) => {
actions
.get(req.id)
.then(e => {
res.status(200).json(e)
})
.catch(err => {
console.log(err);
res.status(500).json({error: "error getting actions"})
})
});


router.post('/', (req, res) => {
    const newAction = req.body
actions
.insert(newAction)
.then(() => {
res.status(201).json({message: `action created`})
})
.catch(err => {
res.status(500).json({error: "can not create action right now"})
})
});

router.put("/:id", (req, res) => {
const upAction = req.body;
const {id} = req.params;
actions
.update(id, actions)
.then(() => {
res.status(200).json(upAction);
})
.catch(err => {
console.log(err);
res.status(500).json({
    error: "The Action information could not be modified."
})
})
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    actions
    .remove(id)
    .then(e => {
    res.status(200).json(e);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({error: "The actions could not be removed"});
    })
    })


module.exports = router;