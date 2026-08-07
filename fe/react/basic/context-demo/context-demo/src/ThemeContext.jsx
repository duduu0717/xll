// 将创建一个Theme 上下文，为深层次的组件树，提供主题共享数据
import { createContext } from 'react'

// 创建上下文
export const ThemeContext = createContext('light')

