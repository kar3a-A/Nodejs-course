import './Modal.css'

// modal styles with default children content
const Modal = ({children}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}

export default Modal

