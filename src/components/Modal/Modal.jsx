import React from "react";
import PropTypes from  'prop-types';
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) =>{
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}> X </button>
                    {children}
                    <button  onClick={closeModal}>Aceptar</button>
            </div>

        </article>
    );
};

/*Modal.propTypes = {
    children: PropTypes.string.isRequired,
};*/

export default Modal;