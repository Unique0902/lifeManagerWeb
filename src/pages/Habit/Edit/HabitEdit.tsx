import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import { Habit } from '../../../data/type';
import { HabitsExArr } from '../../../data/hardDt';

interface Props {}

const HabitEdit: React.FC<Props> = () => {
  const [habit, setHabit] = useState<Habit>(HabitsExArr[0]);
  const navigate = useNavigate();
  return (
    <div>
      <nav className='flex flex-row justify-start mb-[36px]'>
        <button onClick={() => navigate(-1)} className='text-[30px]'>
          {'<'}
        </button>
      </nav>
      <DynamicForm data={habit} onChange={setHabit} />
    </div>
  );
};

export default HabitEdit;
