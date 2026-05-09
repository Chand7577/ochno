import React from "react"

export const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-wine/20 border-wine/50 text-white backdrop-blur-sm",
    navy: "bg-navy/10 border-navy/20 text-navy",
    wine: "bg-wine/10 border-wine/20 text-wine",
    outline: "border-gray-200 text-gray-500",
  }
  
  return (
    <div
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
Badge.displayName = "Badge"
