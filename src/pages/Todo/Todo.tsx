import React, { useState } from 'react';
import { todayTodosExArr } from '../../data/hardDt';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Todo: React.FC<Props> = ({}) => {
  const [isWallView, setIsWallView] = useState<boolean>(false);
  const date = new Date();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className=' border border-white p-[8px]'
        onClick={() => setIsWallView((prev) => !prev)}
      >
        wall view
      </button>
      <h1 className='text-[20px] text-center py-[8px] w-full'>
        {date.getMonth() + 1}월 {date.getDate()}일 오늘 할일
      </h1>
      {isWallView ? (
        <ul className='flex flex-row gap-[8px] flex-wrap'>
          {todayTodosExArr.map((dt, idx) => {
            const dataDate = new Date(dt.date);
            return (
              <li
                className='flex flex-col gap-[4px] w-[160px] p-[10px] bg-sky-400 rounded-xl'
                key={dt.id}
              >
                <div className='flex flex-row justify-end'>
                  <input type='checkbox' defaultChecked={dt.isAccomplished} />
                </div>
                <p>{idx + 1}</p>
                <p>{dt.title}</p>
                <p>
                  {dataDate.getHours() + '시' + dataDate.getMinutes() + '분'}
                </p>
                {dt.projectId && <p>관련프로젝트: {dt.projectId}</p>}
                <p>예상시간: {dt.eta}</p>
                <p>난이도:{dt.difficultyLevel}</p>
                <div className='flex flex-row gap-[4px] justify-end'>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              </li>
            );
          })}
          <li>
            <button
              className='w-full mt-[12px] py-[8px]'
              onClick={() => navigate('/todo/new')}
            >
              추가
            </button>
          </li>
        </ul>
      ) : (
        <ul className='flex flex-col gap-[8px]'>
          {todayTodosExArr.map((dt, idx) => {
            const dataDate = new Date(dt.date);
            return (
              <li className='flex flex-row gap-[6px]' key={dt.id}>
                <p>{idx + 1}</p>
                <p>{dt.title}</p>
                <p>
                  {dataDate.getHours() + '시' + dataDate.getMinutes() + '분'}
                </p>
                {dt.projectId && <p>관련프로젝트: {dt.projectId}</p>}
                <p>예상시간: {dt.eta}</p>
                <p>난이도:{dt.difficultyLevel}</p>
                <input type='checkbox' defaultChecked={dt.isAccomplished} />
                <button>수정</button>
                <button>삭제</button>
              </li>
            );
          })}
          <li>
            <button
              className='w-full mt-[12px] py-[8px]'
              onClick={() => navigate('/todo/new')}
            >
              추가
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Todo;
