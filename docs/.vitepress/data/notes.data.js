import { createContentLoader } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { formatDate, compareByDateDesc } from './utils/date.js'
import {
  getFrontmatter,
  getTitleFromUrl,
  normalizeTags,
  pickText
} from './utils/common.js'

const docsRoot = path.resolve(__dirname, '..', '..')

function resolveFilePath(noteUrl) {
  const relative = decodeURIComponent(noteUrl).replace(/^\//, '')
  return path.join(docsRoot, `${relative}.md`)
}

export default createContentLoader('notes/**/*.md', {
  excerpt: false,
  transform(raw) {
    return raw
      .filter((note) => note.url !== '/notes/')
      .map((note) => {
        const frontmatter = getFrontmatter(note)
        const title = pickText(frontmatter.title, getTitleFromUrl(note.url, 'Untitled'))

        const updated = getFileDate(note.url)
        return {
          title,
          date: formatDate(frontmatter.date) || updated,
          category: pickText(frontmatter.category, ''),
          tags: normalizeTags(frontmatter.tags),
          url: note.url
        }
      })
      .sort((a, b) => compareByDateDesc(a, b, { dateKey: 'date', titleKey: 'title' }))
  }
})

function getFileDate(noteUrl) {
  try {
    const filePath = resolveFilePath(noteUrl)
    const stat = fs.statSync(filePath)
    return formatDate(stat.mtime)
  } catch {
    return ''
  }
}
