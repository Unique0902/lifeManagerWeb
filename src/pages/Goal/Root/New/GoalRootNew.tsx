import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { Goal } from '../../../../data/type';

interface Props {}

const rootGoalExample: Goal = {
  title: '',
  description: '',
  id: '',
  period: '',
  isAccomplished: false,
};

const GoalRootNew: React.FC<Props> = () => {
  const [goal, setGoal] = useState<Goal>(rootGoalExample);
  return (
    <div>
      <DynamicForm data={goal} onChange={setGoal} />
    </div>
  );
};

export default GoalRootNew;
