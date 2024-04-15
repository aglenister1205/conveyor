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
      className={"menubar"}
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
      className={"menubar-trigger"}
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
      className={"menubar-sub-trigger"}
      {...props}
    >
      {children}
      <ChevronRight className="menubar-sub-trigger-chevron" />
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
      className={"menubar-sub-content"}
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
        className={"menubar-content"}
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
      className={"menubar-item"}
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
      className={"menubar-checkbox-item"}
      checked={checked}
      {...props}
    >
      <span
        className=""
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
      className={"menubar-radio-item"}
      {...props}
    >
      <span
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
      className={"menubar-label"}
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
      className={"menubar-separator"}
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
      className="menubar-shortcut"
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