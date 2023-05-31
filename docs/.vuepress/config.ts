import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '陈石林的文档',
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'my-csl/daily-records',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: '在GitHub上编辑此页',
    lastUpdatedText: '上次更新时间',
    contributorsText: '贡献者',
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/interview-questions.md',
            '/guide/vue3-source-code.md'
          ]
        }
      ]
    }
  })
});
