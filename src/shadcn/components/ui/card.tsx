import * as React from "react";

// Define styles for each component
const cardStyle: React.CSSProperties = {
  borderRadius: "0.5rem",
  border: "1px solid #E5E7EB",
  backgroundColor: "white",
  color: "#334155",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px', // This might not directly translate to "space-y-1.5". Consider adjusting padding or margin in children instead.
  padding: '1.5rem', // p-6
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem', // text-2xl
  fontWeight: '600', // font-semibold
  lineHeight: '1.25', // leading-none
  letterSpacing: '-0.025em', // tracking-tight
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '0.875rem', // text-sm
  color: '#6B7280', // text-stone-500
};

const cardContentStyle: React.CSSProperties = {
  padding: '1.5rem', // p-6
};

const cardFooterStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '1.5rem', // p-6
};

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

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

