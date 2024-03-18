import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils"



const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "primary",
        destructive: "destructive",
        outlinePrimary: "outline-primary",
        outlineSecondary: "outline-secondary",
        outlineBlack: "outline-black",
        outlineSuccess: "outline-success",
        outlineDestructive: "outline-destructive",
        outlineWarning: "outline-warning",
        warning: "warning",
        secondary: "secondary",
        success: "success",
        ghost: "ghost",
        link: "link",
      },
      size: {
        default: "default",
        sm: "sm",
        lg: "lg",
        icon: "icon",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Define button styles based on variant
    let buttonStyles: React.CSSProperties = {
      backgroundColor: "blue",
      color: "white",
      border: "1px blue solid",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    };

    // Override styles based on variant
    switch (variant) {
      case "primary":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "blue",
          backgroundColor: "blue",
        };
        break;
      case "destructive":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "red",
          backgroundColor: "red",
        };
        break;
      case "outlinePrimary":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "blue",
          color: "blue",
          backgroundColor: "transparent",
        };
        break;
      case "outlineSecondary":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "gray",
          color: "gray",
          backgroundColor: "transparent",
        };
        break;
      case "outlineBlack":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "black",
          color: "black",
          backgroundColor: "transparent",
        };
        break;
      case "outlineSuccess":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "green",
          color: "green",
          backgroundColor: "transparent",
        };
        break;
      case "ghost":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "transparent",
          backgroundColor: "transparent",
          color: "gray",
        };
        break;
      case "success":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "transparent",
          backgroundColor: "green",
        };
        break;
      case "warning":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "orange",
          backgroundColor: "orange",
        };
        break;
      case "outlineWarning":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "orange",
          color: "orange",
          backgroundColor: "transparent",
        };
        break;
      // Add other cases for different variants as needed
      default:
        break;
    }

    // Define hover styles based on variant
    let hoverStyles: React.CSSProperties = {};
    switch (variant) {
      case "destructive":
        hoverStyles = {
          ...buttonStyles,
          borderColor: "darkred",
          backgroundColor: "darkred",
        };
        break;
      case "success":
        hoverStyles = {
          ...buttonStyles,
          borderColor: "darkgreen",
          backgroundColor: "darkgreen",
        }
        break;
      case "warning":
        hoverStyles = {
          ...buttonStyles,
          borderColor: "darkOrange",
          backgroundColor: "darkorange",
        }
        break;
      case "outlinePrimary":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "blue",
          color: "white",
        };
        break;
      case "outlineBlack":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "black",
          color: "white",
        };
        break;
      case "outlineSecondary":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "gray",
          color: "white",
        };
        break;
      case "outlineWarning":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "orange",
          color: "white",
        };
        break;
      case "outlineDestructive":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "red",
          color: "white",
        };
        break;
      case "outlineSuccess": 
        hoverStyles = {
        ...buttonStyles,
          backgroundColor: "green",
          color: "white",
        };
        break;
      case "secondary":
        hoverStyles = {
          ...buttonStyles,
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        };
        break;
      case "ghost":
        hoverStyles = {
          ...buttonStyles,
          borderColor: "gray",
          backgroundColor: "gray",
          color: "white",
        };
        break;
      case "primary":
      // Add other cases for different variants as needed
      default:
        hoverStyles = {
          ...buttonStyles,
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        };
        break;
    }

    // State to track hover state
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    // Event handlers
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Apply styles based on hover state
    const styles = isHovered ? hoverStyles : buttonStyles;

    return (
      <Comp
        style={{ ...styles }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
