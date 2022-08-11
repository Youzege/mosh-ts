/*
 * @Author: Youzege
 * @Date: 2022-08-10 22:24:16
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-10 22:27:05
 * @FilePath: \dd-typescript-docs\docs\.vitepress\configs\nav.js
 */
export default [
    { text: '基础', link: '/basic/' },
    {
      text: 'Drop A',
      items: [
        {
          text: '好玩的',
          items: [
            { text: '看看 A', link: '...' },
            { text: '看看 B', link: '...' }
          ]
        }
      ]
    },
    {
      text: 'Drop B',
      items: [
        {
          text: '还可以',
          items: [
            { text: '不看了 A', link: '...' },
            { text: '不看了 B', link: '...' }
          ]
        }
      ]
    }
  ]
