import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"

export default function Home() {
  const [articleNode, setArticleNode] = useState(<div></div>)
  useEffect(() => {
    axios
      .get(`docs/list.json`)
      .then(res => {
        const list = res.data
        console.log(list)
        const column = list[0]
        const doc = column.list[0]
        console.log(doc)
        return axios.get(`docs/${doc.name}`)
      })
      .then(doc => {
        console.log(doc)
        const article = doc.data as { title: string; context: string }
        console.log(article)
        setArticleNode(
          <Article title={article.title} context={article.context}></Article>
        )
      })
  }, [])
  return (
    <div className="page container">
      <div className="container mx-auto h-5 border-b-2"></div>
      {articleNode}
    </div>
  )
}
