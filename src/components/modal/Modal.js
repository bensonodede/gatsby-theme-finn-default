import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onScroll }) =>
  ReactDOM.createPortal(
    <div onScroll={onScroll}>{children}</div>,
    document.body
  );

export default Modal;
