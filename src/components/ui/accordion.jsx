import React, { useState } from "react"

export const Accordion = ({ children, type = "single", collapsible = true }) => {
  const [openItem, setOpenItem] = useState(null)
  
  return (
    <div className="space-y-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openItem === child.props.value,
            onToggle: () => setOpenItem(openItem === child.props.value ? null : child.props.value),
          })
        }
        return child
      })}
    </div>
  )
}

export const AccordionItem = ({ value, children, isOpen, onToggle, className }) => {
  return (
    <div className={`bg-[#f8f9fb] rounded-3xl border border-gray-100 group transition-all ${isOpen ? "border-wine/30" : "hover:border-wine/10"} ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, onToggle })
        }
        return child
      })}
    </div>
  )
}

export const AccordionTrigger = ({ children, isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between p-8 text-left transition-all"
    >
      <div className="flex items-center gap-4">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs transition-colors ${isOpen ? "bg-wine text-white" : "bg-navy text-white"}`}>?</span>
        <span className="text-lg font-black text-navy">{children}</span>
      </div>
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-wine" : "text-gray-400"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export const AccordionContent = ({ children, isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="px-8 pb-8 pl-[calc(2rem+2rem)] border-l border-gray-200 ml-12">
        <p className="text-gray-600 text-base leading-relaxed font-medium">
          {children}
        </p>
      </div>
    </div>
  )
}
