import * as React from "react";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    asChild?: boolean;
    placeholder?: string;
    value?: string;
    type?: 'text' | 'input' | 'search' | 'datetime-local' | 'boolean' | 'number';
}

const inputGroupStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    borderRadius: "0",
};

const formControlStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: "var(--input-bg)",
    color: "var(--text-color)",
    border: "1px solid var(--table-border)",
    outline: "none"

};

const inputGroupAppendStyle: React.CSSProperties = {
    display: "flex",
};

const inputGroupTextStyle: React.CSSProperties = {
    border: "1px solid var(--table-border)",
    color: "var(--secondary)",
    padding: ".375rem .75rem",
};




const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({style, ...props }, ref) => (
    <div
        ref={ref}
        style={{...inputGroupStyle, ...style}}
        {...props}
    />
    )
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({style, placeholder, type, value, ...props}, ref) => (
    <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        style={{...formControlStyle, ...style}}
        {...props}
    />
    )
);

const Label = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({style, children, ...props }, ref) => (
    <div 
            ref={ref}
            style={{...inputGroupAppendStyle, ...style}}
            {...props}
        >
        <span style={{...inputGroupTextStyle, ...style}}>{children}</span>
    </div>
    )
);

export {InputGroup, Input, Label};