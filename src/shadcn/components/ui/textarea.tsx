import * as React from "react";
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Define styles for the textarea component
const textareaStyle: React.CSSProperties = {
  flex: 1,
  minHeight: "47px",
  minWidth: "225px",
  width: "100%",
  borderRadius: "0.375rem", // rounded-md
  backgroundColor: "var(--input-bg)",
  color: "var(--text-color)",
  border: "1px solid var(--success)",
  padding: "0.75rem", // px-3 py-2
  fontSize: "0.875rem", // text-sm
  outline: "none",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // ring-offset-white
  transition: "box-shadow 0.2s, border-color 0.2s",
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        rows={1}
        className={className}
        ref={ref}
        style={{ ...textareaStyle }}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

