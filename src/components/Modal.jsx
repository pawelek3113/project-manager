import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { title, buttonCaption = "Close", children },
  ref,
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-lg border bg-slate-800 px-20 pb-8 pt-10 text-white shadow backdrop:bg-black/70"
    >
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex flex-col items-center gap-2">
          {title && (
            <h1 className="text-lg font-bold tracking-tight">{title}</h1>
          )}
          {children}
        </div>
        <form method="dialog">
          <Button text={buttonCaption} type="submit" className="outline-none" />
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
