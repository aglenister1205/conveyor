import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    style={{ display: 'flex', height: '100%', width: '100%', flexDirection: 'column' }}
    className={className}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
    <ResizablePrimitive.PanelResizeHandle
      style={{
        position: 'relative',
        display: 'flex',
        width: '1px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDF2F7',
      }}
      className={className}
      {...props}
    >
      {withHandle && (
        <div style={{
          zIndex: 10,
          display: 'flex',
          height: '1.5rem',
          width: '1.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.25rem',
          border: '1px solid #D1D5DB',
          backgroundColor: '#EDF2F7',
        }}>
          <GripVertical style={{ height: '1rem', width: '1rem' }} />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

