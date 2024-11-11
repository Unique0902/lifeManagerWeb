import React, { useState } from 'react';
import { GoalsExArr } from '../../data/hardDt';
import GoalObject from '../../components/GoalObject/GoalObject';
import { TGoal } from '../../data/type';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Goal: React.FC<Props> = ({}) => {
  const [rootGoal, setRootGoal] = useState<TGoal>(GoalsExArr[0]);
  const [isShowParentGoalList, setIsShowParentGoalList] =
    useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div>
      <header className='relative w-full flex flex-row justify-start'>
        <button
          className='bg-slate-600 p-[8px] rounded-xl hover:scale-110'
          onClick={() => setIsShowParentGoalList(true)}
        >
          {GoalsExArr[0].title}
        </button>
        {isShowParentGoalList && (
          <ul className='flex flex-col gap-[4px] absolute left-0 top-0 bg-slate-800 p-[8px] rounded-xl'>
            <li
              className='text-end cursor-pointer hover:scale-110 text-[25px] '
              onClick={() => setIsShowParentGoalList(false)}
            >
              X
            </li>
            {GoalsExArr.map((dt, idx) => (
              <li
                key={'nav' + dt.id}
                className='cursor-pointer hover:scale-110'
                onClick={() => setRootGoal(dt)}
              >
                {idx + 1}. {dt.title}
              </li>
            ))}
            <li
              className='cursor-pointer hover:scale-110'
              onClick={() => navigate('/goal/root/new')}
            >
              상위 목표 추가
            </li>
          </ul>
        )}
      </header>
      <section className='flex flex-col gap-[32px]'>
        <GoalObject isRoot={true} goal={rootGoal} />
      </section>
    </div>
  );
};

export default Goal;
