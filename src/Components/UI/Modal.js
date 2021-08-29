import React,{Fragment} from 'react'
import classes from './Modal.module.css';
import REACTDOM from 'react-dom'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}>
    </div>
}
const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div>
        {props.children}
        </div>
        </div>
}
const portalElemat=document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {REACTDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElemat)}
            {REACTDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElemat)}
        </Fragment>
    )
}

export default Modal
