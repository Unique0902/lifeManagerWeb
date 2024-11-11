import React from 'react';
import { lessonsExArr } from '../../data/hardDt';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Lesson: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  return (
    <>
      <ul className='flex flex-col gap-[12px]'>
        {lessonsExArr.map((dt, idx) => (
          <li className='flex flex-row gap-[12px]' key={dt.id}>
            <p>{idx + 1}</p>
            <p>{dt.title}</p>
            <button onClick={() => navigate('/lesson/edit')}>수정</button>
            <button>삭제</button>
          </li>
        ))}
        <li className='cursor-pointer' onClick={() => navigate('/lesson/new')}>
          추가
        </li>
      </ul>
    </>
  );
};

export default Lesson;
