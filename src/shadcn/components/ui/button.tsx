import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'destructive' | 'success' | 'warning' | 'secondary' | 'ghost' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-black' | 'outline-success' | 'outline-warning' | 'outline-destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  position?: 'alone' | 'middle' | 'left-edge' | 'right-edge';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, position, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    let borderRadius = "5px";
    // Set border radius based on position
    switch (position) {
      case "alone":
        borderRadius = "5px";
        break;
      case "middle":
        borderRadius = "0px";
        break;
      case "left-edge":
        borderRadius = "5px 0 0 5px";
        break;
      case "right-edge":
        borderRadius = "0 5px 5px 0";
        break;
      default:
        break;
    }

    let padding = "6px 12px";
    //set padding based on size
    switch(size) {
      case "sm": 
        padding = "3px 6px";
        break;
      case "lg":
        padding = "10px 20px";
        break;
      case "icon":
        padding = "8px 8px";
        break;
      case "default":
      default:
        break;
    }

    // Define button styles based on variant
    let buttonStyles: React.CSSProperties = {
      backgroundColor: "blue",
      color: "white",
      border: "1px blue solid",
      padding: padding,
      borderRadius: borderRadius,
      fontSize: "16px",
      cursor: "pointer",
    };

    // Override styles based on variant
    switch (variant) {
      case "destructive":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "red",
          backgroundColor: "red",
        };
        break;
      case "outline-primary":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "blue",
          color: "blue",
          backgroundColor: "transparent",
        };
        break;
      case "outline-secondary":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "gray",
          color: "gray",
          backgroundColor: "transparent",
        };
        break;
      case "outline-black":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "black",
          color: "black",
          backgroundColor: "transparent",
        };
        break;
      case "outline-success":
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
      case "outline-warning":
        buttonStyles = {
          ...buttonStyles,
          borderColor: "orange",
          color: "orange",
          backgroundColor: "transparent",
        };
        break;
      case "outline-destructive":
        buttonStyles = {
          ...buttonStyles, 
          borderColor: "red",
          color: "red",
          backgroundColor: "transparent",
        
        };
        break;
      case "secondary":
        buttonStyles = {
          ...buttonStyles, 
          borderColor: "gray",
          backgroundColor: "gray",
        }
        break;
      case "link":
        buttonStyles = {
          ...buttonStyles,
          color: "cyan",
          borderColor: "transparent",
          backgroundColor: "transparent",
          textDecoration: "underline",
        }
        break;
      case "primary":
      default:  
        buttonStyles = {
          ...buttonStyles,
          borderColor: "blue",
          backgroundColor: "blue",
        };
        break;
      // Add other cases for different variants as needed
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
      case "outline-primary":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "blue",
          color: "white",
        };
        break;
      case "outline-black":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "black",
          color: "white",
        };
        break;
      case "outline-secondary":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "gray",
          color: "white",
        };
        break;
      case "outline-warning":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "orange",
          color: "white",
        };
        break;
      case "outline-destructive":
        hoverStyles = {
          ...buttonStyles,
          backgroundColor: "red",
          color: "white",
        };
        break;
      case "outline-success": 
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
      case "link":
        hoverStyles = {
          ...buttonStyles, 
          color: "magenta",
        }
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
        className={className}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
