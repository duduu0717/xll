import SidebarNoteItem from '@/components/SidebarNoteItem';
// SidebarNoteList RSC SEO -> 
// 拆出来 SidebarNoteItem CSR负责交互

export default function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes);// hash转二维数组 方便map 遍历
  if (arr.length === 0) {
    return (
      <div className="notes-empty">
        No Notes Created yet
      </div>
    )
  }
  return (
    <ul className="notes-list">
      {
        arr.map(([noteId, note]) => {
          return (
            <li key={noteId}>
              <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
            </li>
          );
        })
      }
    </ul>
  )
}
