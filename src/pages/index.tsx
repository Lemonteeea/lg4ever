import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Article from "../components/Article"
interface SectionData {
  title: string // 章节标题名
  filename: string // 章节文件名
}
interface ColumnData {
  id: string
  title: string
  list: SectionData[]
}
export default function Home() {
  const [articleNode, setArticleNode] = useState(<div></div>)
  const [sectionList, setSectionList] = useState([] as SectionData[])
  const [currSelect, setCurrSelect] = useState(0)
  const clickSection = (index: number) => {
    setCurrSelect(index)
  }
  useEffect(() => {
    async function changeSection() {
      const sectionData = sectionList[currSelect]
      if (!sectionData) return
      const res = await axios.get(`docs/${sectionData.filename}`)
      const section = res.data as { title: string; context: string }
      setArticleNode(
        <Article title={section.title} context={section.context}></Article>
      )
    }
    changeSection()
  }, [sectionList, currSelect])
  useEffect(() => {
    axios.get(`docs/list.json`).then(res => {
      const list = res.data as ColumnData[]
      const column = list[0]
      setSectionList(column.list)
    })
  }, [])
  return (
    <div className="container">
      <div className="fixed left-0 right-0 top-0 bg-white z-10 h-16 border-b-2"></div>
      <div className="page relative top-16 bottom-0 overflow-y-auto overflow-x-hidden shadow-lg">
        <div className="fixed pt-10 text-opacity-80 text-sm w-80 h-full border-r-2">
          <header className="font-semibold text-base p-6">章节目录</header>
          <ul>
            {sectionList.map((section, index) => {
              return (
                <li
                  onClick={() => clickSection(index)}
                  className="text-gray-800 mb-2 overflow-ellipsis border-b-2 p-2 cursor-pointer hover:text-blue-400"
                >
                  {section.title}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="ml-80 p-20 pt-10">{articleNode}</div>
      </div>
    </div>
  )
}
