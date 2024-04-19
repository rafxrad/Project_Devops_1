import { openDb } from "../configDB.js";

export const createTable = async () => {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Tasks (key INTEGER PRIMARY KEY, title TEXT, done NUMERIC)"
    );
  });
};

export const insertTask = async (req, res) => {
  let task = req.body;

  openDb()
    .then((db) => {
      db.run("INSERT INTO Tasks (title,done) VALUES (?,?)", [
        task.title,
        task.done,
      ]);
    })
    .then(res.json({ statusCode: 200 }));
};

export const updateTask = async (req, res) => {
  let task = req.body;
  if (task.key !== undefined) {
    openDb()
      .then((db) => {
        db.run("UPDATE Tasks SET title=?, done=? WHERE key=?", [
          task.title,
          task.done,
          task.key,
        ]);
      })
      .then(res.json({ statusCode: 200 }));
  }
};

export const showTasks = async (req, res) => {
  return openDb().then((db) => {
    return db.all("SELECT * FROM  Tasks").then((tasks) => res.json(tasks));
  });
};

export const showTask = async (req, res) => {
  let key = await req.body.key;
  return openDb().then((db) => {
    return db
      .get("SELECT * FROM  Tasks WHERE key=?", [key])
      .then((task) => res.json(task));
  });
};

export const deleteTask = async (req, res) => {
  let key = await req.body.key;
  return openDb().then((db) => {
    return db
      .get("DELETE FROM Tasks WHERE key=?", [key])
      .then((task) => res.json(task));
  });
};
