import * as React from "react";
import { useState } from "react";
import "./card.css";

const Deck = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({style, ...props }, ref) => (
    <div
      ref={ref}
      className="deck"
      style={{...style}}
      {...props}
    />
  )
);

Deck.displayName = "Deck";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    // Event handlers for mouse enter and leave
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <div
          ref={ref}
          className={`card ${isHovered ? "card-hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          <div className="circle">
              {/* Render the content always */}
              <div className="circle-content">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if(!isHovered) {
                        if (
                            child.type &&
                            ((child.type as any).displayName !== "CardHeader" &&
                            (child.type as any).displayName !== "CardTitle"
                          )) {
                            return React.cloneElement(child);
                          }
                } else if (child.type) {
                    return React.cloneElement(child);
                }
                }
                return null;
              })}
              </div>
          </div>
          {/* Render title and description below circle */}
          {!isHovered &&
            React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                if ((child.type as any).displayName === "CardHeader" || (child.type as any).displayName === "CardTitle") {
                  return React.cloneElement(child);
                }
              }
              return null;
            })}
        </div>
      );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => (
    <div
      className="card-header"
      ref={ref}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ ...props }, ref) => (
    <h3
      className="card-title"
      ref={ref}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ ...props }, ref) => (
    <p
      className="card-description"
      ref={ref}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ ...props }, ref) => (
      <div
        className="card-content"
        ref={ref}
        {...props}
      />
    )
  );
  CardContent.displayName = "CardContent";

const CardField = React.forwardRef<HTMLPreElement, React.HTMLAttributes<HTMLPreElement>>(
  ({ ...props }, ref) => (
    <pre
      ref={ref}
      className="card-field"
      {...props}
    />
  )
);
CardField.displayName = "CardField";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => (
    <div
      ref={ref}
      className="card-footer"
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Deck, Card, CardContent, CardHeader, CardTitle, CardDescription, CardField, CardFooter };
