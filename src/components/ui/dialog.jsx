import React, { useEffect } from "react"

export const Dialog = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:p-10">
      <div 
        className="fixed inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" 
        onClick={() => onOpenChange?.(false)}
      />
      <div className="relative z-[110] w-full max-w-2xl my-auto animate-in zoom-in-95 duration-200">
        {children}
      </div>
    </div>
  )
}

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative grid w-full gap-4 border bg-white p-6 shadow-lg sm:rounded-3xl ${className}`}
    {...props}
  >
    {children}
  </div>
))
DialogContent.displayName = "DialogContent"

export const DialogHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)
DialogHeader.displayName = "DialogHeader"

export const DialogFooter = ({ className, ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
)
DialogFooter.displayName = "DialogFooter"

export const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

export const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"
