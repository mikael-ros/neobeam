import Marpit from '@marp-team/marpit'
import fs from 'fs'

// 1. Create instance (with options if you want)
const marpit = new Marpit()

// 2. Add theme CSS
const theme = `
/* @theme example */

section {
  background-color: #111;
  color: #111;
  font-size: 30px;
  padding: 40px;
}

h1,
h2 {
  text-align: center;
  margin: 0;
}

h1 {
  color: #FFAA00;
}
`
marpit.themeSet.default = marpit.themeSet.add(theme)

// 3. Render markdown
const markdown = `

# Hello, Marpit!

Marpit is the skinny framework for creating slide deck from Markdown.

---

## Ready to convert into PDF!

You can convert into PDF slide deck through Chrome.

`
const { html, css } = marpit.render(markdown)

// 4. Use output in your HTML
const htmlFile = `
<!DOCTYPE html>
<html><body>
  <style>${css}</style>
  ${html}
</body></html>
`
fs.writeFileSync('example.html', htmlFile.trim())
