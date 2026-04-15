import { defineConfig } from 'vitepress'
import { siteConfig } from './site.mts'
import { nav } from './nav.mts'
import { sidebar } from './sidebar.mts'

export default defineConfig({
  ...siteConfig,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yukunliu110100001111' }
    ],
    outline: {
      label: '目录'
    }
  }
})
