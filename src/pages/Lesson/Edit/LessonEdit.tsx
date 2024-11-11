import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import { Lesson } from '../../../data/type';
import { lessonsExArr } from '../../../data/hardDt';

interface Props {}

const LessonEdit: React.FC<Props> = () => {
  const [lesson, setLesson] = useState<Lesson>(lessonsExArr[0]);
  const navigate = useNavigate();
  return (
    <div>
      <nav className='flex flex-row justify-start mb-[36px]'>
        <button onClick={() => navigate(-1)} className='text-[30px]'>
          {'<'}
        </button>
      </nav>
      <DynamicForm data={lesson} onChange={setLesson} />
    </div>
  );
};

export default LessonEdit;
