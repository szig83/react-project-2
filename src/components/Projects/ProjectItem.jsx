export default function ProjectItem({ project, index, onDetails }) {
	return (
		<div className="project-item" onClick={onDetails}>
			<h2>
				#{index} {project.title}
			</h2>
			<span>{project.start}</span>
			<div className="description">{project.description}</div>
		</div>
	)
}
