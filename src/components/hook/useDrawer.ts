import { useState } from "react";

export const useDrawer = (initialValue: boolean) => {
   const [open, setOpen] = useState<boolean>(initialValue);

   const handleDrawerOpen: () => void = () => setOpen(true);
   const handleDrawerClose: () => void = () => setOpen(false);
   return { open, handleDrawerOpen, handleDrawerClose };
};
