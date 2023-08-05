import axios from "axios";
// import { produce } from "immer";
// import { UseMutationOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface Task {
	name: string;
	completed: boolean;
}

export interface UpdateTaskRequest {
	taskIdx: number;
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

// export const useAllTasks = () => {
// 	return useQuery<Task[]>(["tasks"], fetchAllTasks, {
// 		initialData: [],
// 		refetchOnWindowFocus: false,
// 	});
// };

// export const useUpdateTask = (options?: UseMutationOptions<Task, unknown, UpdateTaskRequest>) => {
// 	return useMutation({
// 		...options,
// 		mutationFn: (request: UpdateTaskRequest) => updateTask(request.taskIdx, request.completed),
// 	});
// };

// export const useRefetchAllTasks = () => {
// 	const queryClient = useQueryClient();
// 	const refetchAllTasks = () => queryClient.invalidateQueries(["tasks"]);
// 	return { refetchAllTasks };
// };

// export const useUpdateTaskState = () => {
// 	const queryClient = useQueryClient();
// 	const updateTaskState = (idx: number, task: Task) => {
// 		queryClient.setQueryData(["tasks"], (oldData: Task[] | undefined) => {
// 			if (oldData) {
// 				const updatedData = produce(oldData, (draft) => {
// 					draft[idx] = task;
// 				});
// 				return updatedData;
// 			}
// 			return oldData;
// 		});
// 	};
// 	return { updateTaskState };
// };
