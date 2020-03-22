const showdown  = require('showdown')
const fs = require('fs')

const converter = new showdown.Converter()

const ignore_file_paths = new Set([
  "./.git",
  "./node_modules",
])

function find_html_md_files(path)
{
  let filepaths = []

  fs.readdirSync(path)
  .forEach(filename => {
    const sub_path = path + "/" + filename
    if (ignore_file_paths.has(sub_path)) return

    if (fs.lstatSync(sub_path).isDirectory())
    {
      filepaths = filepaths.concat(find_html_md_files(sub_path))
    }
    else
    {
      if (sub_path.endsWith(".html.md"))
      {
        filepaths.push(sub_path)
      }
    }
  })

  return filepaths
}

const html_md_files = find_html_md_files(".")


html_template_buffer = fs.readFileSync("template.html")
const html_template = html_template_buffer.toString("utf8")

html_md_files.forEach(filepath => {
  const html_filepath = filepath.replace(".md", "")

  const text_buffer = fs.readFileSync(filepath)
  const text = text_buffer.toString("utf8")
  const html_body = converter.makeHtml(text)

  const whole_html = html_template.replace("<HTML_BODY_HERE>", html_body)

  fs.writeFileSync(html_filepath, whole_html)
})
