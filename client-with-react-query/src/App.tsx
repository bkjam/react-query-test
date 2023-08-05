import { TaskCard } from "./components";
import { Task, fetchAllTasks } from "./dataAccess";
import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
	const { data: tasks, isFetching } = useQuery<Task[]>(["tasks"], fetchAllTasks, {
		initialData: [],
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<h1>React-Query: Updating Array Item</h1>
			<div className='card'>
				{isFetching ? (
					<>Fetching Data....</>
				) : (
					<>
						{tasks.map((task, idx) => (
							<TaskCard key={idx} taskIdx={idx} taskName={task.name} completed={task.completed} />
						))}
					</>
				)}
			</div>
		</>
	);
}

export default App;
