// RSC 组件 async 异步 为了await先去后端拿数据
export default async function Page() {
  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">
        Click a note on the left to view somthings
      </span>
    </div>
  )
}