const { Router } = require("express");
const {
  insertTask,
  showTasks,
  deleteTask,
  showTask,
  updateTask,
} = require("./Controller/Task.js");

const router = Router();
router.post("/task", insertTask);
router.get("/tasks", showTasks);
router.put("/task", updateTask);
router.post("/select/task", showTask);
router.post("/delete/task", deleteTask);
module.exports = router;
