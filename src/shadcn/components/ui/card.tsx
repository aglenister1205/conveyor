import * as React from "react";

// Define styles for each component
const deckStyle: React.CSSProperties = {
  flexWrap: "wrap",
}

const cardStyle: React.CSSProperties = {
  borderRadius: "0.5rem",
  backgroundColor: "var(--bg-color)",
  color: "var(--text-color)",
  border: "1px solid var(--table-border)", // border-stone-200
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  display: 'inline-block',
  margin: '0.5rem',
  padding: '1rem',
  width: '300px',
  height: '300px',
  overflow: 'hidden',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px', // This might not directly translate to "space-y-1.5". Consider adjusting padding or margin in children instead.
  textAlign: 'center',
  height: '65px',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  letterSpacing: '-0.025em',
  overflow: 'hidden',
  wordBreak: 'break-all', // Break long words
  minHeight: '30px',
  maxHeight: '60px',
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '12px', // text-sm
  color: '#6B7280', // text-stone-500
  flexShrink: '0',
  marginBottom: '0.5rem',
};

const cardContentStyle: React.CSSProperties = {
  backgroundColor: 'var(--table-border)',
  height: '205px',
  padding: '0.5rem',
  overflow: 'hidden', // Allow content to scroll if it overflows
  whiteSpace: 'normal', // Allow text to wrap within the content
};

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
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...cardStyle, ...style }}
      {...props}
    />
  )
);
Card.displayName = "Card";

// CardHeader Component
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...cardHeaderStyle, ...style }}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// CardTitle Component
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ style, ...props }, ref) => (
    <h3
      ref={ref}
      style={{ ...cardTitleStyle, ...style }}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// CardDescription Component
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ style, ...props }, ref) => (
    <p
      ref={ref}
      style={{ ...cardDescriptionStyle, ...style }}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// CardContent Component
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...cardContentStyle, ...style }}
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

