import React from 'react'
import { Todo } from '../types/Todo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = React.memo(({ todo }) => {

  return (
    <div className={classNames('todo', {'completed': todo.completed})}>
    {/* <div className="todo completed"> */}
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
        />
      </label>

      <span className="todo__title">{todo.title}</span>

      {/* Remove button appears only on hover */}
      <button type="button" className="todo__remove">
        ×
      </button>

      {/* overlay will cover the todo while it is being updated */}
      <div className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
});
