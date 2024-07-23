export default function NewProject({ onClose }) {
	return (
		<div className="new-project">
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h2>Új project hozzáadása</h2>{' '}
				<span style={{ cursor: 'pointer' }} onClick={onClose}>
					[Bezár]
				</span>
			</div>
		</div>
	)
}
