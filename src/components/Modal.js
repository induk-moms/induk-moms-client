import Modal from 'react-modal'
import ReviewModal from './Modal/ReviewModal'

function ModalCustom({
  type,
  modalIsOpen,
  setModalIsOpen,
  club,
  setRating,
  setReview,
  handleReviewSubmit,
  setSubmitBtn,
}) {
  console.log('modal', club)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      {type === 'review' ? (
        <ReviewModal
          setSubmitBtn={setSubmitBtn}
          club={club}
          setRating={setRating}
          setReview={setReview}
          handleReviewSubmit={handleReviewSubmit}
          setModalIsOpen={setModalIsOpen}
        />
      ) : (
        <div>Modal</div>
      )}
    </Modal>
  )
}

export default ModalCustom

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
    padding: '20px',
    maxWidth: '90%',
    maxHeight: '90%',
    boxSizing: 'border-box',
  },
}
