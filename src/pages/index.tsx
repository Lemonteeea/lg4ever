import axios from "axios"
import React, { useEffect, useState } from "react"
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
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full h-16 bg-white border-b-2"></div>
      <div className="flex flex-1 w-full justify-center overflow-hidden">
        <div className="flex 2xl:w-1280 xl:w-1024 lg:w-950 w-full h-full shadow-lg">
          <div className="lg:w-40 xl:w-60 2xl:w-80 w-0 h-full mt-16 overflow-hidden">
            <header className="container font-semibold text-base p-6">
              章节目录
            </header>
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
          <div className="flex-1 h-full lg:p-20 p-5 pt-10 overflow-y-auto context">
            {articleNode}
          </div>
        </div>
      </div>
      {/* <div className="page relative top-16 bottom-0 overflow-y-auto overflow-x-hidden ">
        <div className="fixed pt-10 text-opacity-80 text-sm w-80 h-full border-r-2 sm:hidden">
          
        </div>
        <div className="container xl:ml-80 "></div>
      </div> */}
    </div>
  )
}
