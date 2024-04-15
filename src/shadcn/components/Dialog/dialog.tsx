import * as React from "react";
import "./dialog.css"; // Import CSS file
import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

// DialogOverlay Component
const DialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className="dialog-overlay" {...props} />
  )
);
DialogOverlay.displayName = "DialogOverlay";

// DialogContent Component
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className="dialog-content" {...props}>
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

// DialogTrigger Component
const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Trigger ref={ref} className="dialog-trigger" {...props}>
    {children}
  </DialogPrimitive.Trigger>
));
DialogTrigger.displayName = "DialogTrigger";

// DialogHeader Component
const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className="dialog-header" {...props}>
    {children}
  </div>
);
DialogHeader.displayName = "DialogHeader";

// DialogFooter Component
const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className="dialog-footer" {...props}>
    {children}
  </div>
);
DialogFooter.displayName = "DialogFooter";

// DialogTitle Component
const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h2 className="dialog-title" {...props}>
    {children}
  </h2>
);
DialogTitle.displayName = "DialogTitle";

// DialogDescription Component
const DialogDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => (
  <p className="dialog-description" {...props}>
    {children}
  </p>
);
DialogDescription.displayName = "DialogDescription";

const CustomCloseDialog = () => (
  <DialogClose className="dialog-close">
    <X />
    Close
  </DialogClose>
);

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  CustomCloseDialog as DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
