import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"
import LinkButton from "../components/LinkButton"
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
  const [showCategory, setShowCategory] = useState(false)
  const useLocalStorage = () => {
    const [localStorage, setLocalStorage] = useState(
      undefined as undefined | Storage
    )
    useEffect(() => {
      // 在gatebys中无法直接使用window对象，否则build会出错
      setLocalStorage(window.localStorage)
      setCurrSelect(parseInt(window.localStorage!.getItem("pageIndex") || "0"))
    }, [])
    return localStorage
  }
  const localStorage = useLocalStorage()
  const clickSection = (index: number) => {
    localStorage && localStorage.setItem("pageIndex", "" + index)
    setCurrSelect(index)
  }
  const switchCategory = () => {
    setShowCategory(!showCategory)
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
      <div className="w-full bg-white border-b-2 px-60">
        <LinkButton onClick={switchCategory}>
          {showCategory ? "隐藏" : "显示"}目录
        </LinkButton>
      </div>
      <div className="flex flex-1 w-full justify-center overflow-hidden">
        <div className="flex 2xl:w-1280 xl:w-1024 lg:w-950 w-full h-full shadow-lg">
          {showCategory && (
            <div className="lg:w-40 xl:w-60 2xl:w-80 w-0 h-full shadow-lg overflow-y-auto">
              <header className="container font-semibold text-base p-6 mt-16 sticky top-0 bg-white">
                章节目录
              </header>
              <ul>
                {sectionList.map((section, index) => {
                  const basicClass =
                    "text-gray-800 mb-2 overflow-ellipsis border-b-2 p-2 cursor-pointer overflow-hidden hover:text-blue-500"
                  const classString =
                    (index === currSelect ? "text-blue-400 " : "") + basicClass
                  return (
                    <li
                      onClick={() => clickSection(index)}
                      className={classString}
                    >
                      {section.title}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div className="flex-1 h-full lg:p-20 p-5 pt-10 overflow-y-auto context">
            {articleNode}
          </div>
        </div>
      </div>
    </div>
  )
}
