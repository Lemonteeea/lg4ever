import React from "react"
interface Props {
  title: string
  context: string
}
export default function Article({ title, context }: Props) {
  return (
    <div className="main-container">
      <h1 className="main-title">{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: context,
        }}
        className="rich-text-wrap"
      ></div>
    </div>
  )
}
