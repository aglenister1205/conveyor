import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

const Dialog = DialogPrimitive.Root
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
  backgroundColor: "var(--bg-color)",
  color: "var(--text-color)",
  border: "1px solid var(--table-border)", // border-stone-200
  padding: '1.5rem', // p-6
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-lg
  borderRadius: '0.375rem', // sm:rounded-lg
  transitionDuration: '200ms', // duration-200
};

const dialogCloseStyle: React.CSSProperties = {
  right: '1rem', // right-4
  top: '1rem', // top-4
  borderRadius: '0.125rem', // rounded-sm
  opacity: 0.7, // opacity-70
  transition: 'opacity 200ms', // transition-opacity
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0.04)', // data-[state=open]:bg-stone-100
  color: '#6B7280', // data-[state=open]:text-stone-500
  borderColor: '#D1D5DB', // dark:ring-offset-stone-950
};

const DialogTriggerStyle: React.CSSProperties = {
  backgroundColor: "var(--secondary)",
  color: "white",
  border: "1px var(--secondary) solid",
  padding: "6px 12px",
  borderRadius: 0,
  fontSize: "16px",
  cursor: "pointer",
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
    </DialogPrimitive.Content>
  </DialogPortal>
));
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

const customCloseDialog = () => {
  return (
  <DialogClose style={dialogCloseStyle}>
    <X/>
    Close
  </DialogClose>
  );
}

// Apply styles based on hover state

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ children, style, ...props }, ref) => {
  const HoverTriggerStyle: React.CSSProperties = {
    ...DialogTriggerStyle,
    border: "1px gray solid",
    backgroundColor: "gray",
  };
  
  // State to track hover state
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  
  // Event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // Merge styles based on hover state
  const mergedStyles = isHovered ? { ...style, ...HoverTriggerStyle } : { ...style, ...DialogTriggerStyle };

  return (
    <DialogPrimitive.Trigger
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      style={mergedStyles}
      {...props}
    >
      {children}
    </DialogPrimitive.Trigger>
  );
});

DialogTrigger.displayName = "DialogTrigger";

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  customCloseDialog as DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
