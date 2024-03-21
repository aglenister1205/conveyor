import * as React from "react";
import { ChevronDown } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ style, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    style={{ ...style, zIndex: 10, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ style, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    style={{ ...style, flex: 1, display: 'flex', listStyleType: 'none', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ style, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    style={{
      display: 'inline-flex',
      height: '2.5rem',
      padding: '0 1rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.375rem',
      backgroundColor: 'white',
      border: '1px solid transparent',
      color: 'rgba(55, 65, 81, 1)',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      transition: 'all 0.2s',
      cursor: 'pointer',
      ...((props as { ['data-state']?: string })['data-state'] === 'open' && {
        backgroundColor: 'rgba(209, 213, 219, 0.5)',
        borderColor: 'rgba(209, 213, 219, 1)',
      }),
      ...(props.disabled && {
        pointerEvents: 'none',
        opacity: 0.5,
      }),
      ...style,
    }}
    {...props}
  >
    {children}
    <ChevronDown
      style={{ marginLeft: '0.5rem', transition: 'transform 200ms' }}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;


const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ style, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    style={{ ...style, left: 0, top: 0, width: '100%', }}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ style, ...props }, ref) => (
  <div style={{ position: 'absolute', left: 0, top: '100%', display: 'flex', justifyContent: 'center' }}>
    <NavigationMenuPrimitive.Viewport
      style={{ ...style, marginTop: '1.5rem', overflow: 'hidden', borderRadius: '0.375rem', border: '1px solid #E5E7EB', backgroundColor: 'white', color: '#6B7280', boxShadow: '0px 1px 2px 0 rgba(0, 0, 0, 0.05)', width: '100%', maxWidth: '20rem', zIndex: 50 }}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ style, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    style={{ ...style, zIndex: 1, height: '1.5px', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}
    {...props}
  >
    <div style={{ position: 'relative', top: '60%', height: '2px', width: '2px', transform: 'rotate(45deg)', borderRadius: '2px', backgroundColor: 'rgba(209, 213, 219, 1)', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.15)' }} />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

