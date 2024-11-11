import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { SubGoal } from '../../../../data/type';
import { GoalsExArr } from '../../../../data/hardDt';

interface Props {}

const emptyGoal: SubGoal = {
  id: '',
  title: '',
  description: '',
  period: '',
  isAccomplished: false,
};

const GoalSubRootEdit: React.FC<Props> = () => {
  const [goal, setGoal] = useState<SubGoal>(
    GoalsExArr[0].subGoal ? GoalsExArr[0].subGoal[0] : emptyGoal
  );
  return (
    <div>
      <DynamicForm data={goal} onChange={setGoal} />
    </div>
  );
};

export default GoalSubRootEdit;
