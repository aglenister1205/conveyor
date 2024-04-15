// Alert.tsx
import React, { forwardRef } from "react";
import "./alert.css";

type Variant = "default" | "destructive" | "success";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    let containerClasses = "alert-container";
    let iconClasses = "alert-icon";

    if (variant === "destructive") {
      containerClasses += " destructive";
      iconClasses += " destructive";
    } else if (variant === "success") {
      containerClasses += " success";
      iconClasses += " success";
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={containerClasses + " " + className}
        {...props}
      />
    );
  }
);
Alert.displayName = "Alert";

export default Alert;
