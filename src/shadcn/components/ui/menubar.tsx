import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef(
  (
    { className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>,
    ref
  ) => (
    <MenubarPrimitive.Root
      style={{
        display: 'flex',
        height: '2.5rem',
        alignItems: 'center',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        backgroundColor: 'white',
        padding: '0.5rem',
        color: '#4B5563',
      }}
      className={className}
      {...props}
    />
  )
)
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef(
  (
    { className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>,
    ref
  ) => (
    <MenubarPrimitive.Trigger
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        outline: 'none',
      }}
      className={className}
      {...props}
    />
  )
)
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef(
  (
    { className, inset, children, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean },
    ref
  ) => (
    <MenubarPrimitive.SubTrigger
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
      }}
      className={className}
      {...props}
    >
      {children}
      <ChevronRight style={{ marginLeft: 'auto', height: '1rem', width: '1rem' }} />
    </MenubarPrimitive.SubTrigger>
  )
)
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef(
  (
    { className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>,
    ref
  ) => (
    <MenubarPrimitive.SubContent
      style={{
        zIndex: 50,
        minWidth: '12rem',
        overflow: 'hidden',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        backgroundColor: 'white',
        padding: '0.25rem',
        color: '#4B5563',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
      className={className}
      {...props}
    />
  )
)
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef(
  (
    {
      className,
      align = "start",
      alignOffset = -4,
      sideOffset = 8,
      ...props
    }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>,
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        style={{
          zIndex: 50,
          minWidth: '12rem',
          overflow: 'hidden',
          borderRadius: '0.375rem',
          border: '1px solid #E5E7EB',
          backgroundColor: 'white',
          padding: '0.25rem',
          color: '#4B5563',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        }}
        className={className}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef(
  (
    { className, inset, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean },
    ref
  ) => (
    <MenubarPrimitive.Item
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
      }}
      className={className}
      {...props}
    />
  )
)
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef(
  (
    { className, children, checked, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>,
    ref
  ) => (
    <MenubarPrimitive.CheckboxItem
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
      }}
      className={className}
      checked={checked}
      {...props}
    >
      <span
        className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
        style={{ display: 'flex', left: '0.375rem', height: '0.875rem', width: '0.875rem' }}
      >
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef(
  (
    { className, children, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>,
    ref
  ) => (
    <MenubarPrimitive.RadioItem
      style={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: '0.25rem',
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        outline: 'none',
      }}
      className={className}
      {...props}
    >
      <span
        className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
        style={{ display: 'flex', left: '0.375rem', height: '0.875rem', width: '0.875rem' }}
      >
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef(
  (
    { className, inset, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { inset?: boolean },
    ref
  ) => (
    <MenubarPrimitive.Label
      style={{
        paddingLeft: inset ? '2rem' : undefined,
        paddingRight: inset ? undefined : '0.75rem',
        paddingTop: '0.375rem',
        paddingBottom: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: '600',
      }}
      className={className}
      {...props}
    />
  )
)
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef(
  (
    { className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>,
    ref
  ) => (
    <MenubarPrimitive.Separator
      style={{
        margin: '0 -0.5rem',
        height: '1px',
        backgroundColor: '#E5E7EB',
      }}
      className={className}
      {...props}
    />
  )
)
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className="ml-auto text-xs tracking-widest text-stone-500 dark:text-stone-400"
      style={{ marginLeft: 'auto', fontSize: '0.75rem', letterSpacing: '0.05rem' }}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
