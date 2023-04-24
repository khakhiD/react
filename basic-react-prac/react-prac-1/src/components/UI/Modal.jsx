import React from 'react'

function Modal({modalTitle, modalBody}) {
  return (
    <div>
        <div className="title">
            <h3 className='titleText'>
                {modalTitle}
            </h3>
        </div>
        <div className="body">
            <p className='bodyText'>
                {modalBody}
            </p>
            <button>Okay</button>
        </div>
    </div>
  )
}

export default Modal