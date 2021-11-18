import path from "path"
import fs from "fs"
const resList = [] as any[]
// 写入文本到文件
function writeDoc(filename: string, doc: string, cb?: any) {
  const file = path.resolve(__dirname, `../../static/docs/${filename}`)
  const voidFunc = () => {}
  fs.writeFile(file, doc, cb || voidFunc)
}
// 从指定目录中获取文件内容
function readHtml(id: string, filename: string) {
  const fileStream = fs.readFileSync(
    path.resolve(__dirname, `./rawHtml/${id}/${filename}`)
  )
  return fileStream.toString("utf8") as string
}
// 获取文档字符串
function getDocStr(htmlStr: string) {
  const startIndex = htmlStr.indexOf("rich-text-wrap") + 16
  htmlStr = htmlStr.substring(startIndex)
  const endIndex = htmlStr.indexOf("el-dialog__wrapper")
  htmlStr = htmlStr.substring(0, endIndex)
  const lastIndex = htmlStr.lastIndexOf("</div>") - 50
  htmlStr = htmlStr.substring(0, lastIndex).replace(/`/g, "\\`")
  return htmlStr
}

function getCourseTitle(htmlStr: string) {
  const courseTitleIndexStart = htmlStr.indexOf('<h1 style="display: none">')
  const courseTitleIndexEnd = htmlStr.indexOf("</h1>")
  return htmlStr
    .slice(courseTitleIndexStart + 26, courseTitleIndexEnd)
    .split("-")[0]
    .trim()
}

// 生成课程数据
function createCourse(dirName: string) {
  const id = dirName
  let courseTitle = ""
  const list = [] as any[]
  const fileList = fs.readdirSync(path.resolve(__dirname, `./rawHtml/${id}`))
  if (fileList.length === 0) return
  fileList.sort((a, b) => parseInt(a) - parseInt(b))
  fileList.forEach(filename => {
    let htmlStr = readHtml(id, filename).trim()
    if (courseTitle === "") {
      courseTitle = getCourseTitle(htmlStr)
    }
    const reg = /<h1.*class=\"main-title\">.*\n\s*([\s\S]*)\n.*<\/h1>/
    // const title = reg.exec(htmlStr)![1].replace(/\n|\r|\s/g, "")
    const title = reg.exec(htmlStr)![1].replace(/\n|\r/g, "")
    const docStr = getDocStr(htmlStr)
    const destStr = JSON.stringify({
      title,
      context: docStr,
    })
    const docId = parseInt(filename.replace(".html", ""))
    const name = id + (Array(2).join("0") + docId).slice(-2) + ".json"
    writeDoc(name, destStr)
    list.push({ title, filename: name })
  })
  resList.push({
    id,
    title: courseTitle,
    list: list,
  })
}
function start() {
  const dirList = fs.readdirSync(path.resolve(__dirname, "./rawHtml"))
  dirList.forEach(dirName => {
    createCourse(dirName)
  })
  const listStr = JSON.stringify(resList)
  writeDoc("list.json", listStr)
}

// function test() {
// }

// test()
start()
