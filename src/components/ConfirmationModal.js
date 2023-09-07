import React from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ConfirmationModal = () => {
  const { confirmationModal, isLoading } = useSelector(
    (state) => state.products
  );
  const { isOpen, toggle, title, confirmationMessage, onYes, onNo } =
    confirmationModal;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
      <ModalBody>{isLoading ? "Deleting..." : confirmationMessage}</ModalBody>
      <ModalFooter>
        <Button disabled={isLoading} color="primary" onClick={onYes}>
          Yes
        </Button>
        <Button disabled={isLoading} color="secondary" onClick={onNo}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
