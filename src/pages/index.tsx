import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
interface SectionData {
  title: string // 章节标题名
  filename: string // 章节文件名
}
interface CourseData {
  id: string
  title: string
  list: SectionData[]
}
export default function Home() {
  const [courseList, setCourseList] = useState(
    undefined as undefined | CourseData[]
  )
  useEffect(() => {
    // 获取课程列表
    axios.get(`docs/list.json`).then(res => {
      const list = res.data as CourseData[]
      setCourseList(list)
    })
  }, [])
  return (
    <div>
      <ul>
        {courseList?.map(course => (
          <li key={course.id}>
            <Link to="/course" state={course}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
