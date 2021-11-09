import path from "path"
import fs from "fs"
const resList = [] as any[]
function writeDoc(filename: string, doc: string, cb?: any) {
  const file = path.resolve(__dirname, `../static/docs/${filename}`)
  const voidFunc = () => {}
  fs.writeFile(file, doc, cb || voidFunc)
}
function readHtml(id: string, filename: string) {
  const fileStream = fs.readFileSync(
    path.resolve(__dirname, `./rawHtml/${id}/${filename}`)
  )
  return fileStream.toString("utf8") as string
}
function getDocStr(htmlStr: string) {
  const reg = /<h1.*class=\"main-title\">.*\n\s*(.*)\n.*<\/h1>/
  const title = reg.exec(htmlStr)![1]
  const startIndex = htmlStr.indexOf("rich-text-wrap") + 16
  htmlStr = htmlStr.substring(startIndex)
  const endIndex = htmlStr.indexOf("</div>")
  htmlStr = htmlStr.substring(0, endIndex)
  const docStr = `
  const article = {
    title: '${title}',
    context: \`${htmlStr}\`
  } 
  export default article
`
  return docStr
}

// 生成专栏数据
function createColumn(dirName: string) {
  const id = dirName
  const columnTitle = "前端进击笔记"
  const list = [] as string[]
  const fileList = fs.readdirSync(path.resolve(__dirname, `./rawHtml/${id}`))
  fileList.forEach(filename => {
    let htmlStr = readHtml(id, filename).trim()
    const docStr = getDocStr(htmlStr)
    const docId = parseInt(filename.replace(".html", ""))
    const name = id + (Array(2).join("0") + docId).slice(-2) + ".js"
    writeDoc(name, docStr)
    list.push(name)
  })
  resList.push(`{
    title: "${id}", // ${columnTitle}
    list: ${JSON.stringify(list)},
  }`)
}
function start() {
  const dirList = fs.readdirSync(path.resolve(__dirname, "./rawHtml"))
  dirList.forEach(dirName => {
    createColumn(dirName)
  })
  const listStr = `const list = [${resList}]
export default list`
  writeDoc("list.ts", listStr)
}
start()
