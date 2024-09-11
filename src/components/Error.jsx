import { forwardRef, useImperativeHandle, useRef } from "react";
import Modal from "./Modal";

const Error = forwardRef(function Error({ title, description }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      show() {
        modal.current.open();
      },
      hide() {
        modal.current.close();
      },
    };
  });

  return (
    <Modal ref={modal} buttonCaption="Okay">
      <h1 className="text-lg font-bold tracking-tight text-red-600">{title}</h1>
      <p className="text-sm">{description}</p>
    </Modal>
  );
});

export default Error;
