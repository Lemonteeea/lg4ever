import React from "react"

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="w-8 h-8 rounded-full border-2 border-blue-400 animate-spin"
        style={{ borderTopColor: "transparent" }}
      ></div>
    </div>
  )
}
