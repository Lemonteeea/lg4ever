import React from "react"

export default function LinkButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: "lg" | "sm"; disable?: boolean }
) {
  return (
    <button
      {...props}
      className={`${props.size === "lg" ? "text-lg" : "text-sm"} ${
        props.disable ? "text-blue-100" : "text-blue-400 hover:text-blue-500"
      } m-1 py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 ${
        props.className
      }`}
    >
      {props.children}
    </button>
  )
}
