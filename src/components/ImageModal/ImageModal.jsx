import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
        top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

function ImageModal({ image, onClose, isOpen }) {
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={onClose} shouldCloseOnOverlayClick={true} style={customStyles}>
                <button className={css.closeBtn} onClick={onClose}>&#10006;</button>
                <img className={css.modalImage} src={image.urls.regular} alt={image.alt_description}/>
            </Modal>
        </div>
    );
}

export default ImageModal;