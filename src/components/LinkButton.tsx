import React from "react"

export default function LinkButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="text-sm m-1 py-1 px-3 text-blue-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
    >
      {props.children}
    </button>
  )
}