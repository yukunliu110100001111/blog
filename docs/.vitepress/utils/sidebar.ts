import fs from 'fs'
import path from 'path'
import type { DefaultTheme } from 'vitepress'

export function getSidebarItems(
  dir: string,
  basePath: string = '/notes'
): DefaultTheme.SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const items: DefaultTheme.SidebarItem[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const children = getSidebarItems(
        fullPath,
        path.posix.join(basePath, entry.name)
      )
      if (children.length > 0) {
        items.push({
          text: entry.name,
          collapsible: true,
          collapsed: true,
          items: children
        })
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const name = entry.name.replace(/\.md$/, '')
      if (name.toLowerCase() !== 'readme') {
        items.push({
          text: name,
          link: path.posix.join(basePath, name)
        })
      }
    }
  }

  return items
}
