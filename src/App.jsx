import { useState } from 'react'
import ProjectList from './components/Projects/ProjectList'
import AddProject from './components/Projects/AddProject'
import ProjectDetails from './components/Projects/ProjectDetails'
import Button from './components/Button'
import Modal from './components/Modal'

// const InitProjects = [
// 	{
// 		id: 1,
// 		title: 'Project 1',
// 		description: 'Valami project leírás kerül ide',
// 		start: '2024-07-01',
// 		participants: [],
// 	},
// 	{
// 		id: 2,
// 		title: 'Project 2',
// 		description: 'Akármi project leírás lesz itt',
// 		start: '2024-08-12',
// 		participants: [],
// 	},
// 	{
// 		id: 3,
// 		title: 'Project 3',
// 		description: 'Ez lesz a leírása a projectnem',
// 		start: '2024-06-17',
// 		participants: [],
// 	},
// ]

function App() {
	console.log('App component')

	const [showAddProject, setShowAddProject] = useState(false)
	const [projects, setProjects] = useState([])
	const [showProjectDetails, setShowProjectDetails] = useState(false)
	const [selectedProject, setSelectedProject] = useState(null)

	function handleShowAddProject() {
		setShowAddProject((show) => !show)
	}

	function handleAddProject(project) {
		console.log(project)
		setProjects((p) => [...p, project])
		setShowAddProject(false)
	}

	function handleSetSelectedProject(id) {
		console.log(id)
		setSelectedProject(id)
	}

	return (
		<>
			{showAddProject && (
				<AddProject onClose={handleShowAddProject} onAddProject={handleAddProject} />
			)}

			<Button onClick={handleShowAddProject}>Új project hozzáadása</Button>
			<ProjectList
				projects={projects}
				onAddProject={handleAddProject}
				onSelectProject={handleSetSelectedProject}
			/>
			{selectedProject && (
				<Modal title="Project részletek" onClose={() => handleSetSelectedProject(null)}>
					<ProjectDetails projects={projects} selectedProject={selectedProject} />
				</Modal>
			)}
		</>
	)
}

export default App
