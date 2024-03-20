import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "../../utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
// Define styles for each component
const dialogOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // bg-black/80
  transitionDuration: '200ms', // duration-200
};

const dialogContentStyle: React.CSSProperties = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  zIndex: 50,
  width: '100%',
  maxWidth: '32rem', // max-w-lg
  transform: 'translate(-50%, -50%)',
  gap: '1rem', // gap-4
  border: '1px solid #E5E7EB', // border-stone-200
  backgroundColor: 'white',
  padding: '1.5rem', // p-6
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-lg
  borderRadius: '0.375rem', // sm:rounded-lg
  transitionDuration: '200ms', // duration-200
};

// DialogOverlay Component
const DialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...dialogOverlayStyle, ...style }}
      {...props}
    />
  )
);
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={className}
      {...props}
      style={{...dialogContentStyle}}
    >
      {children}
      <DialogPrimitive.Close>
        <X/>
        <span>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

// DialogHeader Component
const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ style, ...props }) => (
  <div
    style={{ ...style }}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

// DialogFooter Component
const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ style, ...props }) => (
  <div
    style={{ ...style }}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

// DialogTitle Component
const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ style, ...props }) => (
  <h2
    style={{ ...style }}
    {...props}
  />
);
DialogTitle.displayName = "DialogTitle";

// DialogDescription Component
const DialogDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ style, ...props }) => (
  <p
    style={{ ...style }}
    {...props}
  />
);
DialogDescription.displayName = "DialogDescription";


export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
