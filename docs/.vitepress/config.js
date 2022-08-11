/*
 * @Author: Youzege
 * @Date: 2022-08-10 22:11:08
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-11 22:28:48
 * @FilePath: \dd-typescript-docs\docs\.vitepress\config.js
 */
import nav from './configs/nav'
import sidebar from './configs/sidebar'
export default {
  title: 'TypeScript Docs',
  description: '记录学习 Mosh的 TS 课程',
  base: '/mosh-ts/dist/',
  themeConfig: {
    siteTitle: 'Mosh TS 课程记录文档',
    outlineTitle: '本页消息',
    nav,
    sidebar,
    editLink: {
      pattern: '',
      text: '暂时无法修改'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Youzege' },
    ],
    prev: '123',
    docFooter: {
      prev: '?',
      next: '下一页'
    },
    footer: {
      message: '没什么',
      copyright: '@Youzege'
    }
  }
}