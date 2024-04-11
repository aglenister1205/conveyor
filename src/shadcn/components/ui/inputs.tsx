import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    asChild?: boolean;
    placeholder?: string;
    value?: string;
    type?: 'text' | 'input' | 'search' | 'datetime-local' | 'boolean' | 'number';
    position?: 'middle' | 'left' | 'right' | 'alone';
}

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: 'right' | 'left';
}

const inputGroupStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    borderRadius: "0.375rem",
    border: "1px solid var(--table-border)",
    backgroundColor: "transparent",
};

const formControlStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: "var(--input-bg)",
    color: "var(--text-color)",
    border: "1px solid transparent",
    outline: "none",
    padding: ".375rem .375rem",
    colorScheme: "var(--color-scheme)"
};

const formLeft: React.CSSProperties = {
    borderRightColor: "var(--table-border)",
    borderRadius: "0.375rem 0 0 0.375rem ",
}

const formMiddle: React.CSSProperties = {
    borderRightColor: "var(--table-border)",
    borderLeftColor: "var(--table-border)",
    borderRadius: "0",
}

const formRight: React.CSSProperties = {
    borderLeftColor: "var(--table-border)",
    borderRadius:  "0 0.375rem 0.375rem 0",
}

const formAlone: React.CSSProperties = {
    borderRadius: "0.375rem",
    borderColor: "var(--success)",
}

const inputGroupAppendStyle: React.CSSProperties = {
    display: "flex",
};

const inputGroupTextStyle: React.CSSProperties = {
    backgroundColor: "var(--label-bg)",
    border: "1px solid transparent",
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
    ({ style, placeholder, position, type, value, ...props }, ref) => {
    // Conditional styles based on position
    let conditionalStyles: React.CSSProperties = {};
    if (position === 'left') {
        conditionalStyles = formLeft;
    } else if (position === 'right') {
        conditionalStyles = formRight;
    } else if (position === 'middle') {
        conditionalStyles = formMiddle;
    } else if (position === 'alone') {
        conditionalStyles = formAlone;
    }

    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            style={{ ...formControlStyle, ...conditionalStyles, ...style}}
            {...props}
            />
        );
    }
);

const Label = React.forwardRef<HTMLDivElement, LabelProps>(
    ({style, position, children, ...props }, ref) => {

    // Conditional styles based on position
    let conditionalStyles: React.CSSProperties = {};
    if (position === 'left') {
        conditionalStyles = { borderRadius: "0.375rem 0 0 0.375rem"};
    } else{
        conditionalStyles = { borderRadius: "0 0.375rem 0.375rem 0"};
    }

    return (
    <div 
            ref={ref}
            style={{...conditionalStyles, ...inputGroupAppendStyle, ...style}}
            {...props}
        >
        <span style={{...conditionalStyles, ...inputGroupTextStyle, ...style}}>{children}</span>
    </div>
    )
    }
);

export {InputGroup, Input, Label};