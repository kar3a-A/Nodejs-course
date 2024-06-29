import { createPortal } from 'react-dom'
import './Modal.css'

// modal styles with default children content
// eslint-disable-next-line react/prop-types
const Modal = ({children,setshowModal, danger}) => {
  return (
    createPortal(
      <div className='modal-component'>
        <div className="modal-backdrop">
          <div className="modal" style={{
            border:"1px solid",
            borderColor: danger ? "red" : "green",
            backgroundColor: danger ? "rgb(0, 0, 0,0.5)" : "rgba(71, 242, 122, 0.908)" }}>
            {children}
            <button onClick={() => setshowModal(false)}>Close</button>
          </div>
        </div>
      </div>
    , document.getElementById('modal')
  )
  );
}

export default Modal

