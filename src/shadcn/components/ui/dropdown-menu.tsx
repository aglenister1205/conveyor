import * as React from "react" 
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'background-color 0.3s',
        backgroundColor: inset ? 'transparent' : 'white',
        color: inset ? 'white' : 'black',
      }}
      {...props}
    >
      {children}
      <ChevronRight style={{ marginLeft: 'auto', height: '1rem', width: '1rem' }} />
    </DropdownMenuPrimitive.SubTrigger>
  )
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
  >(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      style={{
        zIndex: 50,
        minWidth: '8rem',
        overflow: 'hidden',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        backgroundColor: 'white',
        padding: '0.25rem',
        color: '#111827',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      }}
      {...props}
    />
  )
)
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
  >(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        style={{
          zIndex: 50,
          minWidth: '8rem',
          overflow: 'hidden',
          borderRadius: '0.375rem',
          border: '1px solid #E5E7EB',
          backgroundColor: 'white',
          padding: '0.25rem',
          color: '#111827',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        }}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
  >(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'background-color 0.3s',
        backgroundColor: inset ? 'transparent' : 'white',
        color: inset ? 'white' : 'black',
      }}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
  >(({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'background-color 0.3s',
        backgroundColor: 'white',
        color: 'black',
      }}
      checked={checked}
      {...props}
    >
      <span style={{ position: 'absolute', left: '0.75rem' }}>
        <Check style={{ height: '1rem', width: '1rem' }} />
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
)
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
  >(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'background-color 0.3s',
        backgroundColor: 'white',
        color: 'black',
      }}
      {...props}
    >
      <span style={{ position: 'absolute', left: '0.75rem' }}>
        <Circle style={{ height: '1rem', width: '1rem' }} />
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
  >(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      style={{
        paddingLeft: inset ? '2rem' : '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.375rem',
        paddingBottom: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: '600',
      }}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      style={{
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        height: '1px',
        backgroundColor: '#E5E7EB',
      }}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={className}
      {...props}
      style={{
        marginLeft: 'auto',
        fontSize: '0.75rem',
        fontWeight: '400',
        opacity: '0.6',
      }}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};