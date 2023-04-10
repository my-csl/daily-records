import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh',
  title: '陈石林的文档',
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'my-csl/daily-records',
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/README.md', '/guide/getting-started.md']
        }
      ]
    }
  })
})
