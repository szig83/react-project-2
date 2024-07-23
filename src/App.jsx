import ProjectList from './components/Projects/ProjectList'

const InitProjects = [
	{
		id: 1,
		title: 'Project 1',
		description: 'Valami project leírás kerül ide',
		start: '2024-07-01',
		participants: [],
	},
	{
		id: 2,
		title: 'Project 2',
		description: 'Akármi project leírás lesz itt',
		start: '2024-08-12',
		participants: [],
	},
	{
		id: 3,
		title: 'Project 3',
		description: 'Ez lesz a leírása a projectnem',
		start: '2024-06-17',
		participants: [],
	},
]

function App() {
	console.log('App component')

	return (
		<>
			<ProjectList projects={InitProjects} />
		</>
	)
}

export default App
