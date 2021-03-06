import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '75%',
    zIndex: '99',
  },
};

const ReactModal = ({ showModal, toggleModal, children }) => {
  const handleCloseModal = (e) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      contentLabel="modal content"
      ariaHideApp={false}
    >
      <div className="flex flex-col">
        <div className="text-right">
          <button onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimesCircle} color="black" size="2x" />
          </button>
        </div>
        <div className="w-full h-full p-1 md:p-3">{children}</div>
      </div>
    </Modal>
  );
};
export default ReactModal;
