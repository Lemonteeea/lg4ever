import axios from "axios"
import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
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
  const selectCourse = (course: CourseData) =>
    navigate("/course", {
      state: course,
    })
  return (
    <div className=" mt-24">
      <ul>
        {courseList?.map(course => (
          <li key={course.id}>
            <LinkButton size="lg" onClick={() => selectCourse(course)}>
              {course.title}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  )
}
