export default function Modal({
	children,
	title,
	onClose,
	isPositionCenter = false,
	isBackdropClose = true,
}) {
	const positionClass = isPositionCenter ? ' modal-center' : ''

	function handleBackdropClick(e) {
		if (isBackdropClose && e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div className={`modal ${positionClass}`} onClick={handleBackdropClick}>
			<div className="modal-panel">
				<div className="modal-header">
					{title}
					<span onClick={onClose}>x</span>
				</div>
				<div className="modal-content">{children}</div>
				{/* <div className="modal-footer">
					<Button onClick={onClose}>Bezárás</Button>
				</div> */}
			</div>
		</div>
	)
}
