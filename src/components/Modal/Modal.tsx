import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import ModalOverlayStyles from './Modal.module.scss';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {ModalProps} from "../../entity/index.entity";

const Modal = ({onClose, children}: ModalProps) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if ((e.target as HTMLElement).classList.contains(ModalOverlayStyles.modalOverlay)) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const modalsRoot = document.getElementById('modals');
    if (!modalsRoot) return null;

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={ModalOverlayStyles.modal}>
                {children}
            </div>
        </>,
        modalsRoot
    );
};

export default Modal;