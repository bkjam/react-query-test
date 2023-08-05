import fs from "fs";

const dataFile = "./data.json";

const checkIfDataFileExists = (): boolean => {
  try {
    return fs.existsSync(dataFile);
  } catch (err) {
    console.error(err);
  }
  return false;
};

const createAndInitDataFile = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    name: "Task " + (i + 1),
    completed: false,
  }));
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(dataFile, jsonData);
};

export const initData = () => {
  if (!checkIfDataFileExists()) {
    createAndInitDataFile();
  }
};

export const getTasks = () => {
  const rawdata = fs.readFileSync(dataFile);
  return JSON.parse(rawdata.toString());
};

export const updateTask = (idx: number, state: boolean) => {
  const tasks = getTasks();
  tasks[idx] = { ...tasks[idx], completed: state };
  const data = JSON.stringify(tasks);
  fs.writeFileSync(dataFile, data);
  return tasks[idx];
};
