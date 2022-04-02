import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, {sanitize: false}).use(require('remark-prism'), {
    plugins: [
      'autolinker',
      'command-line',
      'data-uri-highlight',
      'diff-highlight',
      'inline-color',
      'keep-markup',
      'line-numbers',
      'show-invisibles',
      'treeview',
    ],
  }).process(markdown)
  return result.toString()
}
