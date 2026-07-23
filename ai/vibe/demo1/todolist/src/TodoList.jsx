import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import TodoItem from './TodoItem'

export default function TodoList({ tasks, onToggle, onDelete, onReorder }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-400 py-6">暂无待办，添加一个吧 ✨</p>
  }

  return (
    <DragDropContext onDragEnd={onReorder}>
      <Droppable droppableId="todolist">
        {provided => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="divide-y divide-gray-100 mb-4"
          >
            {tasks.map((task, index) => (
              <TodoItem
                key={task.id}
                task={task}
                index={index}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
