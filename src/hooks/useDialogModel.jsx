import React, { useCallback, useState } from "react";

const useDialogModal = (Component) => {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);


  const DialogComponent = useCallback(({ ...props }) => {
    if (!open) return null;
    if (Component) {
      return (
        <Component open={open} onClose={() => setOpen(false)} {...props} />
      );
    }
  }, [open])

  return [DialogComponent, openDialog, closeDialog];
}

export default useDialogModal