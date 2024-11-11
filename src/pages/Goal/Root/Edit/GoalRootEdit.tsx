import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { TGoal } from '../../../../data/type';
import { GoalsExArr } from '../../../../data/hardDt';

interface Props {}

const GoalRootEdit: React.FC<Props> = () => {
  const [goal, setGoal] = useState<TGoal>(GoalsExArr[0]);
  return (
    <div>
      <DynamicForm data={goal} onChange={setGoal} />
    </div>
  );
};

export default GoalRootEdit;
