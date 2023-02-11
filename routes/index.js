const express = require('express');

const router = express.Router();
const renderTemplate = require('../utils/renderTemplate');
const { Todolist } = require('../db/models');
const Main = require('../View/Main');
// const { where } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const allToDos = await Todolist.findAll();
    const plainTodos = allToDos.map((item) => item.get({ plain: true }));
    renderTemplate(Main, { plainTodos }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body.id)

  try {
    const result = await Todolist.findOne({ where: { id: req.params.id } });
    await result.update({ status: true });
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await Todolist.findOne({ where: { id: req.params.id } });
    await result.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
