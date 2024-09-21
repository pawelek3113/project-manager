import { forwardRef } from "react";
import Button from "./Button";
import Modal from "./Modal";

const DeletionModal = forwardRef(function DeletionModal(
  { name, proceedCb },
  ref,
) {
  return (
    <Modal custom ref={ref}>
      <>
        <div className="w-full text-center">
          <h1 className="text-lg font-bold leading-10 tracking-tight">
            You're about to delete {name}
          </h1>
          <h2>Do you want to proceed?</h2>
        </div>
        <div className="w-3/4">
          <form method="dialog">
            <div className="flex flex-row justify-around">
              <Button text="No" type="submit" />
              <Button
                text="Yes"
                type="submit"
                className="border-red-800 font-bold text-red-800"
                onClick={proceedCb}
              />
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
});

export default DeletionModal;
