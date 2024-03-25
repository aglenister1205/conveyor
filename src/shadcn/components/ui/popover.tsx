import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../utils";

const Popover = PopoverPrimitive.Root;
// Define styles for each part of the popover content
const popoverContentStyle: React.CSSProperties = {
  zIndex: 50,
  width: "18rem",
  padding: "1rem",
  backgroundColor: "var(--bg-color)",
  color: "var(--text-color)",
  border: "1px solid var(--table-border)", // border-stone-200
  boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)", // shadow-md
  borderRadius: "0.375rem", // sm:rounded-md
};

const PopoverTriggerStyle: React.CSSProperties = {
  backgroundColor: "var(--primary)",
  color: "white",
  border: "1px var(--primary) solid",
  padding: "6px 12px",
  borderRadius: 0,
  fontSize: "16px",
  cursor: "pointer",

};
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(className)}
      style={{ ...popoverContentStyle }}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;


const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ children, style, ...props }, ref) => {
  const HoverTriggerStyle: React.CSSProperties = {
    ...PopoverTriggerStyle,
    border: "1px var(--primary-dark) solid",
    backgroundColor: "var(--primary-dark)",
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
  const mergedStyles = isHovered ? { ...style, ...HoverTriggerStyle } : { ...style, ...PopoverTriggerStyle };

  return (
    <PopoverPrimitive.Trigger
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      style={mergedStyles}
      {...props}
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTrigger.displayName = "PopoverTrigger";

export { Popover, PopoverTrigger, PopoverContent };
