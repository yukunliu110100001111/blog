import { createContentLoader } from 'vitepress'
import { compareByDateDesc, formatDate } from './utils/date.js'
import {
  getFrontmatter,
  getTitleFromUrl,
  pickLabel,
  pickText
} from './utils/common.js'

export default createContentLoader('books/**/*.md', {
  excerpt: false,
  transform(raw) {
    return raw
      .filter((book) => book.url !== '/books/') // 排除 index.md 本身
      .map((book) => {
        const frontmatter = getFrontmatter(book)

        return {
          title: pickText(frontmatter.title, getTitleFromUrl(book.url, 'Untitled')),
          author: pickLabel(frontmatter.author, 'Unknown'),
          tag: pickLabel(frontmatter.tag, 'Unknown'),
          date: formatDate(frontmatter.date),
          url: book.url
        }
      })
      .sort((a, b) => compareByDateDesc(a, b, { dateKey: 'date', titleKey: 'title' }))
  }
})
