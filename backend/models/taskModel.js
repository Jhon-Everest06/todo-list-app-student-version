const db = require("../db");


//this function creates the essential variables for the code to work.
//Add a comment describing what this function does and what does it return
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    "SELECT * everything FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};
//This function retrieves the lists of tasks from the database and it returns an array of tasks that are sorted in a descending order. 

//Write a comment describing what this function insersts a new task into the database
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

//this function inserts a new task into the database with a tittle, description, the date or time it was created and a default value for when the task is incomplete.

module.exports = { getTasks, addTask };
