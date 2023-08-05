import axios from "axios";

export interface Task {
	name: string;
	completed: boolean;
}

export const fetchAllTasks = async (): Promise<Task[]> => {
	const response = await axios.get("/api/tasks");
	return response.data;
};

export const updateTask = async (taskIdx: number, completed: boolean): Promise<Task> => {
	const response = await axios.put(`/api/tasks/${taskIdx}/toggle`, { completed });
	return response.data;
};
