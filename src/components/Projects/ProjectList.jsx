import ProjectItem from './ProjectItem'

export default function ProjectList({ projects, onDetails }) {
	if (projects.length === 0) {
		return <div>Nincs még project felvéve</div>
	}

	return (
		<>
			<div className="project-list">
				{projects.map((project, i) => {
					return (
						<ProjectItem index={i + 1} project={project} key={project.id} onDetails={onDetails} />
					)
				})}
			</div>
		</>
	)
}
