import React, { useEffect, useState } from "react"
import list from "../../static/docs/list"
import Article from "../components/Article"

export default function Home() {
  const column = list[0]
  const doc = column.list[0]
  const [articleNode, setArticleNode] = useState(<div></div>)
  useEffect(() => {
    import(`../../static/docs/${doc}`).then(doc => {
      const article = doc.default as { title: string; context: string }
      setArticleNode(
        <Article title={article.title} context={article.context}></Article>
      )
    })
  })
  return <div className="page">{articleNode}</div>
}
