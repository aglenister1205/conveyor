import * as React from "react";

type Variant = "default" | "destructive" | "success";

export interface AlertProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const alertVariants: Record<
  Variant,
  {
    container?: React.CSSProperties;
    icon?: React.CSSProperties;
    content?: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
  }
> = {
  default: {
    container: {
      position: "relative",
      width: "100%",
      borderRadius: "0.375rem",
      border: "1px solid #E5E7EB",
      padding: "1rem",
    },
    icon: {
      position: "absolute",
      left: "1rem",
      top: "1rem",
      color: "#4B5563",
    },
    content: {
      transform: "translateY(-3px)",
    },
    title: {
      marginBottom: "0.25rem",
      fontWeight: 500,
      lineHeight: "1.25rem",
      letterSpacing: "-0.0125rem",
    },
    description: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  },
  destructive: {
    container: {
      borderColor: "#EF4444",
    },
    icon: {
      color: "#EF4444",
    },
  },
  success: {
    container: {
      borderColor: "#22C55E",
    },
    icon: {
      color: "#22C55E",
    },
  },
};

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: Variant }>(
  ({ className, variant, ...props }, ref) => {

    let styles: React.CSSProperties = {...alertVariants.default.container}
    
    if(variant && variant !== "default") {
      if(variant === "success") {
      styles = {...styles, ...alertVariants.success.container};
      } else {
        styles = {...styles, ...alertVariants.destructive.container};
      }
    }
    return (
      <div
        ref={ref}
        role="alert"
        style={styles}
        className={className}
        {...props}
      />
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={className}
      style={{
        ...alertVariants.default.title,
      }}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        ...alertVariants.default.description,
      }}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
