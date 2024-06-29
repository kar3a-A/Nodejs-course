import { createPortal } from 'react-dom'
import './Modal.css'

// modal styles with default children content
// eslint-disable-next-line react/prop-types
const Modal = ({children,setshowModal, danger}) => {
  let modalClassName = danger ? 'border-red': 'border-green'
  return (
    createPortal(
      <div className='modal-component'>
        <div className="modal-backdrop">
          <div className={`modal ${modalClassName}`}>
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

