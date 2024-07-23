export default function ProjectItem({ project }) {
	return (
		<div className="project-item">
			<h2>{project.title}</h2>
			<span>{project.start}</span>
			<div className="description">{project.description}</div>
		</div>
	)
}
