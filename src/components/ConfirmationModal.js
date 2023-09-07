import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { setConfirmationModal } from "../views/products/ProductSlice";

const ConfirmationModal = () => {
  const { confirmationModal } = useSelector((state) => state.products);
  const { isOpen, toggle, title, confirmationMessage, onYes, onNo } =
    confirmationModal;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
      <ModalBody>{confirmationMessage}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onYes}>
          Yes
        </Button>
        <Button color="secondary" onClick={onNo}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
