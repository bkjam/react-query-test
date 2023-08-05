import { produce } from "immer";
import { useEffect, useState } from "react";
import { TaskCard } from "./components";
import { Task, fetchAllTasks, updateTask } from "./dataAccess";
import "./App.css";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const data = await fetchAllTasks();
			setTasks(data);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const handleTaskChange = async (taskIdx: number, state: boolean) => {
		const updatedData = await updateTask(taskIdx, state);
		setTasks(
			produce((draft) => {
				draft[taskIdx] = updatedData;
			})
		);
	};

	return (
		<>
			<h1>React-Query: Updating Array Item</h1>
			<div className='card'>
				{isLoading ? (
					<>Fetching Data....</>
				) : (
					<>
						{tasks.map((task, idx) => (
							<TaskCard
								key={idx}
								taskIdx={idx}
								taskName={task.name}
								completed={task.completed}
								onChange={handleTaskChange}
							/>
						))}
					</>
				)}
			</div>
		</>
	);
}

export default App;
