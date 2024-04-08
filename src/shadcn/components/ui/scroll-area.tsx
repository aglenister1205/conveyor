import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, style, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      style={{ ...style, position: "relative", overflow: "hidden" }}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport style={{ height: "100%", width: "100%", borderRadius: "inherit" }}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, style, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      style={{
        ...style,
        display: "flex",
        userSelect: "none",
        transition: "background-color 0.2s",
        ...(orientation === "vertical" && {
          height: "100%",
          width: "2.5px",
          borderLeft: "1px solid transparent",
          padding: "1px",
        }),
        ...(orientation === "horizontal" && {
          height: "2.5px",
          flexDirection: "column",
          borderTop: "1px solid transparent",
          padding: "1px",
        }),
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        style={{ flex: "1", borderRadius: "9999px", backgroundColor: "var(--border)" }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
