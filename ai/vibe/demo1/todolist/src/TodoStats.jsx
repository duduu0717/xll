export default function TodoStats({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const remaining = total - completed

  return (
    <div className="flex justify-between text-sm text-gray-500 pt-3 border-t border-gray-200">
      <span>共 {total} 项</span>
      <span className="text-green-600">已完成 {completed}</span>
      <span className="text-blue-600">待完成 {remaining}</span>
    </div>
  )
}
