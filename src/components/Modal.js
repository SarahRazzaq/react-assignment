import React from 'react';
import "../components/Modal.css";

function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='close-btn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
               <h1>You want to book a call?</h1>
            </div>
            <div className='modal-body'>
                <h1> Call me at 0708-884433</h1>
            </div>
            <div className='modal-footer'>
                <button 
                className='footer-btn'
                onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            </div>
        </div>
    </div>
  ); 
}

export default Modal;
