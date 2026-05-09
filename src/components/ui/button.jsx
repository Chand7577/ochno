import React from "react"

export const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-navy text-white hover:bg-navy/90",
    wine: "bg-wine text-white hover:bg-wine/90 shadow-lg shadow-wine/20",
    outline: "border-2 border-white/20 text-white hover:bg-wine hover:border-wine",
    ghost: "hover:bg-gray-100 text-navy",
    secondary: "bg-gray-100 text-navy hover:bg-gray-200",
  }
  
  const sizes = {
    default: "px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest",
    sm: "px-4 py-2 rounded-lg text-xs font-bold uppercase",
    lg: "px-12 py-6 rounded-2xl text-base font-black uppercase tracking-wider",
    icon: "h-10 w-10 rounded-full",
  }

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"
