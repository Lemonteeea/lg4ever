import { PageProps, navigate } from "gatsby"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Article from "../components/Article"
import LinkButton from "../components/LinkButton"
import { Transition } from "@headlessui/react"
import Loading from "../components/Loading"
import { SectionDataList } from "."
import Catelog from "../components/Catelog"
interface CourseData {
  id: string
  title: string
  list: SectionDataList
}
export default function Course(props: PageProps<object, object, CourseData>) {
  const course = props.location.state
  const [articleNode, setArticleNode] = useState(<div></div>)
  const [currSelect, setCurrSelect] = useState(0)
  const [showCategory, setShowCategory] = useState(false)
  const [list, setList] = useState([] as SectionDataList)
  const ref = useRef(null as null | HTMLDivElement)

  // 界面第一次加载时读取数据
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

  // 当前选中标记发生改变时保存到localstorage中
  useEffect(() => {
    if (!course?.id) return
    // 更新localstorage中存储的阅读的位置
    window.localStorage.setItem(course.id, "" + currSelect)
  }, [currSelect])

  // 章节列表或当前选中标记发生改变时改变界面章节内容
  useEffect(() => {
    // 改变章节
    async function changeSection() {
      const sectionData = list[currSelect]
      if (!sectionData) return
      setArticleNode(<Loading></Loading>)
      const res = await axios.get(`docs/${sectionData.filename}`)
      const section = res.data as { title: string; context: string }
      setArticleNode(
        <Article title={section.title} context={section.context}></Article>
      )
    }
    changeSection()
  }, [currSelect, list])
  // 章节节点改变后重置滚动条
  useEffect(() => {
    if (!ref.current) return
    ref.current.scrollTo({
      top: 0,
    })
  }, [articleNode])

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

  const isNowFirstPage = () => currSelect === 0
  const isNowLastPage = () => currSelect === list.length - 1

  // 上一页
  const toPrevious = () => {
    if (isNowFirstPage()) return
    setCurrSelect(currSelect - 1)
  }

  // 下一页
  const toNext = () => {
    if (isNowLastPage()) return
    setCurrSelect(currSelect + 1)
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full bg-white border-b-2 lg:px-60 px-2">
        <LinkButton onClick={back}>返回</LinkButton>
        <LinkButton onClick={toggleCategory}>
          {showCategory ? "隐藏" : "显示"}目录
        </LinkButton>
        <LinkButton onClick={toPrevious} disable={isNowFirstPage()}>
          上一页
        </LinkButton>
        <LinkButton onClick={toNext} disable={isNowLastPage()}>
          下一页
        </LinkButton>
      </div>
      <div className="flex flex-1 w-full justify-center overflow-hidden">
        <div className="flex 2xl:w-1280 xl:w-1024 lg:w-950 w-full h-full shadow-lg overflow-x-hidden">
          <Transition
            show={showCategory}
            enter="transform transition ease-in-out duration-500"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Catelog
              clickSection={clickSection}
              list={list}
              currSelect={currSelect}
            ></Catelog>
          </Transition>
          <div
            ref={ref}
            className="flex-1 h-full lg:p-20 p-5 pt-10 overflow-y-auto context"
          >
            {articleNode}
          </div>
        </div>
      </div>
    </div>
  )
}
