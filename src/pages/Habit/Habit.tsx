import React, { useState } from 'react';
import { HabitsExArr } from '../../data/hardDt';
import { useNavigate } from 'react-router-dom';

interface Props {}

const dayArr: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const thisWeekFirstDate = new Date();
thisWeekFirstDate.setDate(
  thisWeekFirstDate.getDate() - thisWeekFirstDate.getDay()
);

const Habit: React.FC<Props> = ({}) => {
  const [firstDate, setFirstDate] = useState<Date>(thisWeekFirstDate); // 매주 월요일에 해당
  const dateCopy = new Date(firstDate);
  dateCopy.setMonth(dateCopy.getMonth() + 1);
  dateCopy.setDate(0);
  const lastDate = dateCopy.getDate();
  const navigate = useNavigate();
  return (
    <>
      <header className='text-center'>{firstDate.getMonth() + 1 + '월'}</header>
      <nav className='flex flex-row gap-[8px] mt-[20px]'>
        <button
          className='hover:scale-110'
          onClick={() =>
            setFirstDate((prev) => {
              const newDate = new Date(prev);
              newDate.setDate(prev.getDate() - 7);
              return newDate;
            })
          }
        >
          {'<='}
        </button>
        {dayArr.map((day, idx) => (
          <button
            key={day}
            className='rounded-full p-[12px] bg-sky-500 hover:scale-110'
          >
            {day + '\n'}
            {firstDate.getDate() + idx > lastDate
              ? firstDate.getDate() + idx - lastDate
              : firstDate.getDate() + idx}
          </button>
        ))}
        <button
          className='hover:scale-110'
          onClick={() =>
            setFirstDate((prev) => {
              const newDate = new Date(prev);
              newDate.setDate(prev.getDate() + 7);
              return newDate;
            })
          }
        >
          {'=>'}
        </button>
      </nav>
      <ul className='mt-[60px] flex flex-col gap-[12px]'>
        {HabitsExArr.map((dt, idx) => (
          <li className='flex flex-row gap-[12px]' key={dt.id}>
            <p>{idx + 1}</p>
            <p>{dt.when}</p>
            <p>{dt.what}</p>
            <button onClick={() => navigate('/habit/edit')}>수정</button>
            <button>삭제</button>
            <input type='checkbox' />
          </li>
        ))}
        <li className='cursor-pointer' onClick={() => navigate('/habit/new')}>
          추가
        </li>
      </ul>
    </>
  );
};

export default Habit;
