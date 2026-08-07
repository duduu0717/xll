// react 全面hooks 编程，可以使用react ，react-router-dom 等提供的hooks
// 还可以自定义hooks，实现自己的逻辑
// use开头函数，自己封装的，简单好用
// 比普通的函数封装，多的地方是可以将react 响应式，副作用业务等封装进去
// 在Provider里面，任何层级的组件，多个地方消费数据，模块化抽离放到hooks目录下

import { ThemeContext } from '../ThemeContext'
import { useContext } from 'react' // 消费context

// 约定以use开头
export function useTheme() {
  return useContext(ThemeContext)
}