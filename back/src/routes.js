import { Router } from "express";
import {
  createTable,
  insertTask,
  showTasks,
  updateTask,
  showTask,
  deleteTask,
} from "./Controller/Task.js";

const router = Router();
createTable();
router.post("/task", insertTask);
router.get("/tasks", showTasks);
router.put("/task", updateTask);
router.post("/select/task", showTask);
router.post("/delete/task", deleteTask);
export default router;
