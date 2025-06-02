const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");

//Write a comment describing the purpose of this route
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});
//the purpose of this route is to gather the data from the list and put it in json format so its easy to read for the user.

// Write a comment describing the purpose of this route
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
  res.status(201).json(task);
});
//the purpose of this route is to add a new task to the task management system.
module.exports = router;
