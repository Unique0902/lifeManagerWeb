import React, { useState } from 'react';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import { Todo } from '../../../data/type';

interface Props {}

const TodoEdit: React.FC<Props> = () => {
  const [todo, setTodo] = useState<Todo>({
    id: '',
    title: '',
    description: '',
    date: '',
    eta: '',
    difficultyLevel: '',
    projectId: '',
    isAccomplished: false,
  });
  return (
    <div>
      <DynamicForm data={todo} onChange={setTodo} />
    </div>
  );
};

export default TodoEdit;
