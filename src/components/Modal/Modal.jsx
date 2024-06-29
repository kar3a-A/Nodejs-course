import './Modal.css'

// modal styles with default children content
// eslint-disable-next-line react/prop-types
const Modal = ({children,setshowModal}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={() => setshowModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default Modal

