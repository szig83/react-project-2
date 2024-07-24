export default function ProjectItem({ project, index, onSelectProject }) {
	return (
		<div className="project-item" onClick={() => onSelectProject(project.id)}>
			<h2>
				#{index} {project.title}
			</h2>
			<span>{project.start}</span>
			<div className="description">{project.description}</div>
		</div>
	)
}
