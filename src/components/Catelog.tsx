import React, { useEffect, useRef, useState } from "react"
import type { SectionDataList } from "../pages"

interface CatelogProps {
  list: SectionDataList
  currSelect: number
  clickSection: (index: number) => void
}

const Catelog: React.FC<CatelogProps> = props => {
  const { list, currSelect, clickSection } = props
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null as null | HTMLDivElement)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current?.querySelectorAll("li")
    const node = els?.item(currSelect)
    if (!node) return
    const expectedPlace = ref.current.offsetHeight / 3
    const scrollY =
      node.offsetTop < expectedPlace ? 0 : node.offsetTop - expectedPlace
    setScrollY(scrollY || 0)
  }, [])
  useEffect(() => {
    ref.current?.scrollTo({ top: scrollY })
  }, [scrollY])
  return (
    <div
      className="2xl:w-80 md:w-60 w-40 h-full shadow-lg overflow-y-auto"
      ref={ref}
    >
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
  )
}
export default Catelog
