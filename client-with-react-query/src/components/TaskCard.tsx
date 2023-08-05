import { produce } from "immer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task, UpdateTaskRequest, updateTask } from "../dataAccess";

interface TaskCardProps {
	completed: boolean;
	taskIdx: number;
	taskName: string;
}

export const TaskCard = (props: TaskCardProps) => {
	// const { updateTaskState } = useUpdateTaskState();
	// const { mutate: mutateTask } = useMutation({
	// 	mutationFn: (request: UpdateTaskRequest) => updateTask(request.taskIdx, request.completed),
	// 	onSuccess: (data: Task) => {
	// 		updateTaskState(props.taskIdx, data);
	// 	},
	// });
	const queryClient = useQueryClient();
	const { mutate: mutateTask } = useMutation({
		mutationFn: (request: UpdateTaskRequest) => updateTask(request.taskIdx, request.completed),
		onSuccess: (data: Task) => {
			queryClient.setQueryData(["tasks"], (oldData: Task[] | undefined) => {
				if (oldData) {
					const updatedData = produce<Task[]>(oldData, (draft) => {
						draft[props.taskIdx] = data;
					});
					return updatedData;
				}
				return oldData;
			});
		},
	});

	const onChange = (state: boolean) => {
		mutateTask({ taskIdx: props.taskIdx, completed: state });
	};

	return (
		<div className='checkbox-wrapper'>
			<label>
				<input
					type='checkbox'
					checked={props.completed}
					onChange={(event) => onChange(event.currentTarget.checked)}
					className={props.completed ? "checked" : ""}
				/>
				<span>{props.taskName}</span>
			</label>
		</div>
	);
};
