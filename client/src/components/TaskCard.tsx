interface TaskCardProps {
	completed: boolean;
	taskIdx: number;
	taskName: string;
	onChange: (taskIdx: number, state: boolean) => void;
}

export const TaskCard = (props: TaskCardProps) => {
	return (
		<div className='checkbox-wrapper'>
			<label>
				<input
					type='checkbox'
					checked={props.completed}
					onChange={(event) => props.onChange(props.taskIdx, event.currentTarget.checked)}
					className={props.completed ? "checked" : ""}
				/>
				<span>{props.taskName}</span>
			</label>
		</div>
	);
};
