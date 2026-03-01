import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
}

const AppModal = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "sm:max-w-lg",
}: AppModalProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent
        className={maxWidth}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="mt-4">{children}</div>

        {footer && <DialogFooter className="mt-6">{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default AppModal;
