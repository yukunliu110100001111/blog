import path from 'path'
import { fileURLToPath } from 'url'
import type { DefaultTheme } from 'vitepress'
import { getSidebarItems } from '../utils/sidebar.ts'

const configDir = path.dirname(fileURLToPath(import.meta.url))
const notesDir = path.resolve(configDir, '../../notes')

export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': getSidebarItems(notesDir)
}
