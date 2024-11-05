import React, { useState } from 'react';

interface Props {}

const TodoMonth: React.FC<Props> = () => {
  const [nowDate, setNowDate] = useState(new Date());
  const dateCopy = new Date(nowDate);
  dateCopy.setMonth(nowDate.getMonth() + 1);
  dateCopy.setDate(0);
  const totalDayNum = dateCopy.getDate();
  dateCopy.setDate(1);
  const firstDay = dateCopy.getDay();

  return (
    <div>
      <section className='flex flex-row w-full justify-around'>
        <button
          onClick={() => {
            setNowDate((prev) => {
              const newDate = new Date(prev);
              newDate.setMonth(prev.getMonth() - 1);
              return newDate;
            });
          }}
        >
          {'<'}
        </button>
        <h2>{`${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월`}</h2>
        <button
          onClick={() => {
            setNowDate((prev) => {
              const newDate = new Date(prev);
              newDate.setMonth(prev.getMonth() + 1);
              return newDate;
            });
          }}
        >
          {'>'}
        </button>
      </section>
      <ul className='grid grid-cols-7 w-full mt-[36px]'>
        {Array.from({ length: firstDay }).map((_, idx) => (
          <li key={'blank' + idx}> </li>
        ))}
        {Array.from({ length: totalDayNum }, (_, i) => i + 1).map((dayNum) => (
          <li
            key={dayNum + '일'}
            className='h-[72px] cursor-pointer hover:scale-110 bg-white text-black p-[4px] border border-black'
          >
            {dayNum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoMonth;
