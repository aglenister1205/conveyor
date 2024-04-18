import React from "react";
import "./container.css";

type Sizes = "default" | "small" | "large";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: Sizes;
}

const Container = React.forwardRef<
    HTMLDivElement,
    ContainerProps
>(({ className, size="default", ...props }, ref) => (
    <div
        ref={ref}
        className={className || `conv-container ${size}`}
        {...props}
    />
))
Container.displayName = "Container"

export default Container;