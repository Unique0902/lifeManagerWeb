import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { Goal } from '../../../../data/type';
import { GoalsExArr } from '../../../../data/hardDt';

interface Props {}

const GoalRootNew: React.FC<Props> = () => {
  const [goal, setGoal] = useState<Goal>(GoalsExArr[0]);
  return <div>{/* <DynamicForm data={goal} onChange={setGoal} /> */}</div>;
};

export default GoalRootNew;
