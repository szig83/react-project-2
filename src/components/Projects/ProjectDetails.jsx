export default function ProjectDetails({ projects, selectedProject }) {
	const project = projects.find((p) => p.id === selectedProject)
	return (
		<>
			<h2>{project.title}</h2>
			<div>
				<i>
					<strong>Start:</strong> {project.start}
				</i>
			</div>
			<div style={{ padding: '1rem 0' }}>{project.description}</div>
		</>
	)
}
