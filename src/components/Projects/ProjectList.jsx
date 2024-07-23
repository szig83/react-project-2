import { useState } from 'react'
import ProjectItem from './ProjectItem'
import Button from '../Button'
import NewProject from './NewProject'

export default function ProjectList({ projects }) {
	const [isNewProjectVisible, setIsNewProjectVisible] = useState(false)

	function handleNewProjectVisibility() {
		setIsNewProjectVisible((visible) => !visible)
	}

	return (
		<>
			{isNewProjectVisible ? (
				<NewProject onClose={handleNewProjectVisibility} />
			) : (
				<>
					<Button onClick={handleNewProjectVisibility}>Új project hozzáadása</Button>
					<div className="project-list">
						{projects.map((project) => {
							return <ProjectItem project={project} key={project.id} />
						})}
					</div>
				</>
			)}
		</>
	)
}
