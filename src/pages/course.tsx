import { Link, PageProps, navigate } from "gatsby"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"
import LinkButton from "../components/LinkButton"
interface SectionData {
  title: string // 章节标题名
  filename: string // 章节文件名
}
interface CourseData {
  id: string
  title: string
  list: SectionData[]
}
export default function Course(props: PageProps<object, object, CourseData>) {
  const course = props.location.state
  const [articleNode, setArticleNode] = useState(<div></div>)
  const [currSelect, setCurrSelect] = useState(0)
  const [showCategory, setShowCategory] = useState(false)
  const [list, setList] = useState([] as SectionData[])
  useEffect(() => {
    if (!course?.list || course.list.length === 0) {
      navigate("/")
    } else {
      setList(course.list)
      // 读取localstorage中存储的上一次阅读的位置
      const courseID = parseInt(window.localStorage.getItem(course.id) || "0")
      setCurrSelect(courseID)
    }
  }, [])
  useEffect(() => {
    if (!course?.id) return
    // 更新localstorage中存储的阅读的位置
    window.localStorage.setItem(course.id, "" + currSelect)
  }, [currSelect])
  useEffect(() => {
    // 改变章节
    async function changeSection() {
      const sectionData = list[currSelect]
      if (!sectionData) return
      const res = await axios.get(`docs/${sectionData.filename}`)
      const section = res.data as { title: string; context: string }
      setArticleNode(
        <Article title={section.title} context={section.context}></Article>
      )
    }
    changeSection()
  }, [currSelect, list])
  // 点击章节目录
  const clickSection = (index: number) => {
    setCurrSelect(index)
  }
  // 显示/隐藏目录
  const toggleCategory = () => {
    setShowCategory(!showCategory)
  }
  // 返回课程列表
  const back = () => {
    navigate("/")
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full bg-white border-b-2 px-60">
        <LinkButton onClick={back}>返回</LinkButton>
        <LinkButton onClick={toggleCategory}>
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
                {list.map((section, index) => {
                  const basicClass =
                    "text-gray-800 mb-2 overflow-ellipsis border-b-2 p-2 cursor-pointer overflow-hidden hover:text-blue-500"
                  const classString =
                    (index === currSelect ? "text-blue-400 " : "") + basicClass
                  return (
                    <li
                      onClick={() => clickSection(index)}
                      className={classString}
                      key={section.title}
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
