import React from 'react';
import Modal from 'react-modal';

const selectOption = (props)=>{
    return (
        <Modal
          isOpen={!!props.selectedOption}  
          contentLabel="Example Modal"
          onRequestClose={props.deletePick}
          closeTimeoutMS={200}
          className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.deletePick}>Okay</button>
        </Modal>
    )
}
export default selectOption;