import { Router } from "express";
import {
  insertTask,
  showTasks,
  deleteTask,
  showTask,
  updateTask,
} from "./Controller/Task.js";

const router = Router();
router.post("/task", insertTask);
router.get("/tasks", showTasks);
router.put("/task", updateTask);
router.post("/select/task", showTask);
router.post("/delete/task", deleteTask);
export default router;
