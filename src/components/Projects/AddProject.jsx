import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'

export default function AddProject({ onClose, onAddProject }) {
	const [project, setProject] = useState({
		title: '',
		description: '',
		start: '',
	})

	function handleSubmit(e) {
		e.preventDefault()

		if (!project.title || project.title === '') return

		const id = crypto.randomUUID()
		const newProject = {
			...project,
			id,
			participants: [],
		}

		onAddProject(newProject)
	}

	return (
		<Modal title="Új project hozzáadása" onClose={onClose} isBackdropClose={false}>
			<form onSubmit={handleSubmit}>
				<label>
					<div>Project megnevezés:</div>
					<input
						name="title"
						value={project.title}
						onChange={(e) => setProject((p) => ({ ...p, [e.target.name]: e.target.value }))}
					/>
				</label>
				<label>
					<div>Project leírás:</div>
					<textarea
						value={project.description}
						name="description"
						onChange={(e) => setProject((p) => ({ ...p, [e.target.name]: e.target.value }))}
					></textarea>
				</label>
				<label>
					<div>Project indulás:</div>
					<input
						type="datetime-local"
						name="start"
						value={project.start}
						onChange={(e) => setProject((p) => ({ ...p, [e.target.name]: e.target.value }))}
					/>
				</label>
				<br />
				<Button>Project hozzáadása</Button>
			</form>
		</Modal>
	)
}
