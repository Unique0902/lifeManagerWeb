import React, { useState } from 'react';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { TGoal } from '../../../../data/type';
import { GoalsExArr } from '../../../../data/hardDt';
import { useNavigate } from 'react-router-dom';

interface Props {}

const GoalRootNew: React.FC<Props> = () => {
  const [goal, setGoal] = useState<TGoal>(GoalsExArr[0]);
  const navigate = useNavigate();
  return (
    <div>
      <nav className='flex flex-row justify-start mb-[36px]'>
        <button onClick={() => navigate(-1)} className='text-[30px]'>
          {'<'}
        </button>
      </nav>
      <DynamicForm data={goal} onChange={setGoal} />
    </div>
  );
};

export default GoalRootNew;
