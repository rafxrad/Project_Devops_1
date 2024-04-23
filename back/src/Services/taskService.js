const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function CreateTask(data) {
  try {
    await prisma.task.create({ data });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function ShowTask() {
  try {
    return await prisma.task.findMany();
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function DeleteTask(id) {
  try {
    await prisma.task.delete({ where: { key: id } });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function SelectTask(id) {
  try {
    return await prisma.task.findFirst({ where: { key: id } });
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function UpdateTasks(id, data) {
  try {
    await prisma.task.update({ where: { key: id }, data });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  CreateTask,
  ShowTask,
  DeleteTask,
  SelectTask,
  UpdateTasks,
};
