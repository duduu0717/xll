import { useState } from 'react'

function heavyComputation() {
  console.log('开始执行heavyComputation')
  // 网页性能优化指标
  const startTime = performance.now()// 当前时间
  const result = []
  for (let i = 0; i < 10000; i++) {
    result.push({ id: i, name: `用户-${i}` })
  }
  const duration = performance.now() - startTime// 执行时间
  console.log(duration)

  return result
}
function App() {
  // 状态的初始值，不是直接给，要经过计算

  const [users] = useState(() => heavyComputation()
    // [{ id: 1, name: '微风' },
    // { id: 2, name: '布里茨' },]
  )
  const [filterText, setFilterText] = useState('')
  // 数据状态 state props computed 计算属性
  const filteredUsers = users.filter(user => user.name.includes(filterText))

  return (
    <div style={{ padding: '20px' }}>
      <h2>用户列表</h2>
      <input
        type="text"
        placeholder="请输入用户名"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <p>当前显示{filteredUsers.length}个用户</p>
      <ul style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App