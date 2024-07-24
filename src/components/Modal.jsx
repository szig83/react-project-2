export default function Modal({ children, title, onClose }) {
	return (
		<div className="modal">
			<div className="modal-panel">
				<div className="modal-header">
					{title}
					<span onClick={onClose}>[Bezár]</span>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	)
}
