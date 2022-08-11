/*
 * @Author: Youzege
 * @Date: 2022-08-10 22:25:08
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-11 22:38:25
 * @FilePath: \dd-typescript-docs\docs\.vitepress\configs\sidebar.js
 */
export default {
    '/basic/': [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/basic/' }, 
        ]
      },
      {
        text: '基础知识-1',
        items: [
          { text: 'TS中创建类', link: '/basic/basic-one/createClass' }, 
          { text: '修饰符号', link: '/basic/basic-one/modifierSymbol' }, 
          { text: 'getter&setter', link: '/basic/basic-one/gettersetter' }, 
          { text: '索引签名', link: '/basic/basic-one/signatures' }, 
          { text: '继承', link: '/basic/basic-one/Inheritance' }, 
          { text: '多态性', link: '/basic/basic-one/polymorphisms' }, 
          { text: '接口', link: '/basic/basic-one/interface' }
        ]
      },
      {
        text: '基础知识-2',
        items: [
          { text: '基础 A', link: '/basic/basic-two/basicA' },
          { text: '基础 B', link: '/basic/basic-two/basicB' },
        ]
      }
    ]
}