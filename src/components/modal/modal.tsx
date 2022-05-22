import React from 'react';
import classes from './modal.module.css'
import Input from "./input/input";

const Modal = ({setModalOn}: any) => {

    const onModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setModalOn(false)
    };

    return (
        <div onClick={onModalClick} className={classes.container}>
            <Input setModalOn={setModalOn}/>
        </div>
    );
};

export default Modal;
