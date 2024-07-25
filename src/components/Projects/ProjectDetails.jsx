import { useState } from 'react'
import Button from '../Button'
const participants = [
	{
		id: 1,
		name: 'John Doe',
		email: 'aaa@bbb.hu',
		jobTitle: 'Software Developer',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'bbb@ddd.hu',
		jobTitle: 'Tester',
	},
]

export default function ProjectDetails({ projects, selectedProject, onAddParticipant }) {
	const project = projects.find((p) => p.id === selectedProject)
	const [showNewParticipant, setShowNewParticipant] = useState(false)
	const [selectedParticipant, setSelectedParticipant] = useState('')

	function handleShowNewParticipant() {
		setShowNewParticipant((show) => !show)
	}

	function handleAddParticipant() {
		console.log('Add participant')
		if (!selectedParticipant || selectedParticipant === '') return
		const participant = participants.find((p) => p.id === parseInt(selectedParticipant))
		onAddParticipant(participant)
		setShowNewParticipant((show) => !show)
	}

	return (
		<>
			<h2>{project.title}</h2>
			<div>
				<i>
					<strong>Start:</strong> {project.start}
				</i>
			</div>
			<div style={{ padding: '1rem 0' }}>{project.description}</div>
			<h3>
				Participants
				<span onClick={handleShowNewParticipant}> [+ Új résztvevő hozzáadása]</span>
			</h3>
			{project.participants.length === 0 && <div>Nincs résztvevő</div>}
			{project.participants.length > 0 && (
				<ul>
					{project.participants.map((p) => (
						<li key={p.id}>
							{p.name} - {p.jobTitle}
						</li>
					))}
				</ul>
			)}
			{showNewParticipant && (
				<>
					<select
						value={selectedParticipant}
						onChange={(e) => setSelectedParticipant(e.target.value)}
					>
						<option value="">Válassz...</option>
						{participants.map((p) => (
							<option key={p.id} value={p.id}>
								{p.name} - {p.jobTitle}
							</option>
						))}
					</select>
					<Button onClick={handleAddParticipant}>Hozzáadás</Button>
					<Button onClick={handleShowNewParticipant}>Mégse</Button>
				</>
			)}
		</>
	)
}
