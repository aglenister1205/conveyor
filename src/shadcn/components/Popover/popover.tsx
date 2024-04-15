// Popover.tsx
import React, { forwardRef, useState } from "react";
import "./popover.css";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const Popover = PopoverPrimitive.Root;

const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={"popover-content " + className}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverTrigger = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ children, style, ...props }, ref) => {

  return (
    <PopoverPrimitive.Trigger
      ref={ref}
      className="popover-trigger"
      {...props}
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
});
PopoverTrigger.displayName = "PopoverTrigger";

export { Popover, PopoverTrigger, PopoverContent };
