import React from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ConfirmationModal = () => {
  const { confirmationModal } = useSelector((state) => state.products);
  const { isOpen, toggle, title, confirmationMessage, onYes, onNo } =
    confirmationModal;
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
      <ModalBody>{confirmationMessage}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Yes
        </Button>
        <Button color="secondary" onClick={toggle}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
