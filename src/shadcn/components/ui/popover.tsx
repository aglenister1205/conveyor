import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../utils";

const Popover = PopoverPrimitive.Root;
// Define styles for each part of the popover content
const popoverContentStyle: React.CSSProperties = {
  zIndex: 50,
  width: "18rem",
  padding: "1rem",
  border: "1px solid #E5E7EB", // border-stone-200
  backgroundColor: "white",
  color: "#374151", // text-stone-950
  boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)", // shadow-md
  borderRadius: "0.375rem", // sm:rounded-md
};

const PopoverTriggerStyle: React.CSSProperties = {
  backgroundColor: "blue",
  color: "white",
  border: "1px blue solid",
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
    border: "1px darkblue solid",
    backgroundColor: "darkblue",
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
