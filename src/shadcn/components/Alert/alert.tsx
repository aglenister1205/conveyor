// Alert.tsx
import React from "react";
import "./alert.css";

type Variant = "default" | "destructive" | "success";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}
const Alert = React.forwardRef<
  HTMLDivElement,
  AlertProps
>(({ className, variant="default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={className || `alert-container ${variant}`}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={className || "alert-title"}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className || "alert-description"}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

export default Alert;
