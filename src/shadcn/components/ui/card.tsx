import * as React from "react";
import { useState } from "react";

// Define styles for each component
const deckStyle: React.CSSProperties = {
  flexWrap: "wrap",
}

const cardFooterStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '1.5rem', // p-6
};

const cardFieldStyle: React.CSSProperties = {
  marginBottom: '8px',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--font-size)',
  display: 'flex',
  overflow: 'hidden',
  flexShrink: '0', // prevent from growing beyond content size
};

const Deck = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({style, ...props }, ref) => (
    <div
      ref={ref}
      style={{...deckStyle, ...style}}
      {...props}
    />
  )
);

Deck.displayName = "Deck";


// Card Component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, children, ...props }, ref) => {
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
      {/* Render title always */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type && ((child.type as any).displayName === "CardHeader" || (child.type as any).displayName === "CardTitle")) {
            return React.cloneElement(child);
          }
        }
        return null;
      })}
      {/* Render the content only if hovered */}
      <div className={`card-content ${isHovered ? "card-content-hovered" : "card-content-hidden"}`}>
        {isHovered &&
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (
                child.type &&
                ((child.type as any).displayName !== "CardHeader" || 
                (child.type as any).displayName !== "CarsTitle"
              )) {
                return React.cloneElement(child);
              }
            }
            return null;
          })}
      </div>
    </div>
  );
});

Card.displayName = "Card";  

// CardHeader Component
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      className="card-header"
      ref={ref}
      style={{...style }}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// CardTitle Component
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ style, ...props }, ref) => (
    <h3
      className="card-title"
      ref={ref}
      style={{...style }}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// CardDescription Component
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ style, ...props }, ref) => (
    <p
      className="card-description"
      ref={ref}
      style={{...style }}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// CardContent Component
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
    className="card-content"
    ref={ref}
      style={{...style }}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardField = React.forwardRef<HTMLPreElement, React.HTMLAttributes<HTMLPreElement>>(
  ({ style, ...props }, ref) => (
    <pre
      ref={ref}
      style={{...cardFieldStyle, ...style }}
      {...props}
    />
  )
);
CardField.displayName = "CardField";

// CardFooter Component
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...cardFooterStyle, ...style }}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Deck, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardField };

