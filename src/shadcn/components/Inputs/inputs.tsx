import * as React from "react";
import "./inputs.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string; // Include type property in InputProps interface
}

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={'inputs'}
            {...props}
        />
    )
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        // Conditional classes based on position
        return (
            <input
                ref={ref}
                className={className}
                type={type}
                {...props}
            />
        );
    }
);

const Label = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={className} // Use className prop here
                {...props}
            >
                <span>{children}</span>
            </div>
        );
    }
);


export { InputGroup, Input, Label };
