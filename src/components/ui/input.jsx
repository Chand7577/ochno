import React from "react"

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-14 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white outline-none placeholder:text-gray-400 focus:border-wine transition-all disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"
