import React from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import ShoppingCardModal from "./ShoppingCardModal";
const Modal = () => {
  const { showModalStatus } = useSelector((state) => state.modal);
  return ReactDOM.createPortal(
    <><ShoppingCardModal></ShoppingCardModal></>,
    document.getElementById("modal"),
  );
};
export default Modal;
