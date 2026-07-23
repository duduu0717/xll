import { Draggable } from '@hello-pangea/dnd'

export default function TodoItem({ task, index, onToggle, onDelete }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="flex items-center gap-3 px-3 py-2 border-b border-gray-100 last:border-b-0 group"
        >
          <span
            {...provided.dragHandleProps}
            className="text-gray-300 cursor-grab active:cursor-grabbing select-none"
          >
            ⠿
          </span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-4 h-4 accent-blue-500 cursor-pointer"
          />
          <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {task.text}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </li>
      )}
    </Draggable>
  )
}
