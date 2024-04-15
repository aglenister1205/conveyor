import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={'resizable-panel-group'}
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
      className={'resizable-handle'}
      {...props}
    >
      {withHandle && (
        <div className="resizable-handle-with-handle">
          <GripVertical className="vertical-grip" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

