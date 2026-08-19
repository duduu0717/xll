// 全局负责 提供用户身份状态存储
// 创建一个store
import { create } from 'zustand'

// hooks编程
export const useAuthStore = create(set => ({
  // set 修改状态的方法
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  //actions
  setAuth: ({ token, user }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    set({
      token,
      user
    })
  },
  // 退出登录
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({
      token: '',
      user: null
    })
  }
})) 