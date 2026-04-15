import { defineConfig } from "vitepress";
import { RssPlugin } from "vitepress-plugin-rss";
import { siteConfig } from "./site.mts";
import { nav } from "./nav.mts";
import { sidebar } from "./sidebar.mts";

const baseUrl =
  process.env.RSS_BASE_URL || "https://blog-snowy-theta-58.vercel.app/";

export default defineConfig({
  ...siteConfig,
  vite: {
    plugins: [
      RssPlugin({
        title: siteConfig.title,
        baseUrl,
        copyright: "Copyright (c) 2026, Yishu",
        filename: "feed.rss",
      }),
    ],
  },
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/yukunliu110100001111" },
    ],
    outline: {
      label: "目录",
    },
  },
});
