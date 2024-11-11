import React from 'react';
import { SubGoal, TGoal } from '../../data/type';
import { useNavigate } from 'react-router-dom';

interface Props {
  isRoot: boolean;
  goal: TGoal | SubGoal;
}

const GoalObject: React.FC<Props> = ({ isRoot, goal }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col items-center gap-[8px]'>
        <div className='rounded-full bg-black text-center w-[200px] py-[12px]'>
          {goal.title}
        </div>
        <div className='flex flex-row gap-[4px] justify-end'>
          <button
            onClick={() => navigate('/goal/subRoot/new')}
            className='border hover:scale-110 border-white text-white w-[20px] h-[20px]'
          >
            +
          </button>
          <button
            className='border hover:scale-110 border-white text-white w-[20px] h-[20px]'
            onClick={() => {
              if (isRoot) {
                navigate('/goal/root/edit');
              } else {
                navigate('/goal/subRoot/edit');
              }
            }}
          >
            E
          </button>
          <button className='border hover:scale-110 border-red-600 text-red-600 w-[20px] h-[20px]'>
            R
          </button>
        </div>
      </div>
      <div className='flex flex-row gap-[20px] justify-center'>
        {goal.subGoal?.map((dt) => (
          <GoalObject isRoot={false} goal={dt} key={dt.id} />
        ))}
      </div>
    </>
  );
};

export default GoalObject;
