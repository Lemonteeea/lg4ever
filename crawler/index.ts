import path from "path"
import fs from "fs"
const resList = [] as any[]
// 写入文本到文件
function writeDoc(filename: string, doc: string, cb?: any) {
  const file = path.resolve(__dirname, `../static/docs/${filename}`)
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

// 生成专栏数据
function createColumn(dirName: string) {
  const id = dirName
  const columnTitle = "前端进击笔记"
  const list = [] as any[]
  const fileList = fs.readdirSync(path.resolve(__dirname, `./rawHtml/${id}`))
  fileList.forEach(filename => {
    let htmlStr = readHtml(id, filename).trim()
    const reg = /<h1.*class=\"main-title\">.*\n\s*(.*)\n.*<\/h1>/
    const title = reg.exec(htmlStr)![1]
    const docStr = getDocStr(htmlStr)
    const destStr = JSON.stringify({
      title,
      context: docStr,
    })
    const docId = parseInt(filename.replace(".html", ""))
    const name = id + (Array(2).join("0") + docId).slice(-2) + ".json"
    writeDoc(name, destStr)
    list.push({ title, name })
  })
  resList.push({
    id,
    title: columnTitle,
    list: list,
  })
}
function start() {
  const dirList = fs.readdirSync(path.resolve(__dirname, "./rawHtml"))
  dirList.forEach(dirName => {
    createColumn(dirName)
  })
  const listStr = JSON.stringify(resList)
  writeDoc("list.json", listStr)
}
start()
