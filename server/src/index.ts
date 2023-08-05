import express from "express";
import { getTasks, initData, updateTask } from "./data";
import { wait } from "./helper";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  console.log("Getting All Tasks");
  await wait(5000);
  const tasks = getTasks();
  res.json(tasks);
});

app.put("/api/tasks/:idx/toggle", async (req, res) => {
  const idx = req.params.idx;
  const completed = req.body.completed;
  console.log(`Updating Task ${idx} with state = ${completed}`);
  const updatedTask = updateTask(parseInt(idx), completed);
  res.send(updatedTask);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  initData();
});
