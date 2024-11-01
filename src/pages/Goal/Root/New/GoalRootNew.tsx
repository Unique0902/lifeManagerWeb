import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';

interface Props {}

type RootGoal = {
  title: string;
  description: string;
  dueDate: string;
  lesson: string;
  isSuccess: boolean;
};

const rootGoalExample: RootGoal = {
  title: '목표1',
  description: '목표1입니다',
  dueDate: '5월까지',
  lesson: '교훈1',
  isSuccess: false,
};

const GoalRootNew: React.FC<Props> = () => {
  const [goal, setGoal] = useState<RootGoal>(rootGoalExample);
  return (
    <div>
      <DynamicForm data={goal} onChange={setGoal} />
    </div>
  );
};

export default GoalRootNew;
