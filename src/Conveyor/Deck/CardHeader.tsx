import * as React from "react";

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

export default CardHeader;