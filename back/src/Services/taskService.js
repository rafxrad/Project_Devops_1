import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateTask = async (data) => {
  try {
    await prisma.task.create({ data });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const ShowTask = async () => {
  try {
    return await prisma.task.findMany();
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const DeleteTask = async (id) => {
  try {
    await prisma.task.delete({ where: { key: id } });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const SelectTask = async (id) => {
  try {
    return await prisma.task.findFirst({ where: { key: id } });
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const UpdateTasks = async (id, data) => {
  try {
    await prisma.task.update({ where: { key: id }, data });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
