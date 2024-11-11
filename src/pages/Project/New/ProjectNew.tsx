import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import { Project } from '../../../data/type';
import { projectsExArr } from '../../../data/hardDt';

interface Props {}

const ProjectNew: React.FC<Props> = () => {
  const [project, setProject] = useState<Project>(projectsExArr[0]);
  const navigate = useNavigate();
  return (
    <div>
      <nav className='flex flex-row justify-start mb-[36px]'>
        <button onClick={() => navigate(-1)} className='text-[30px]'>
          {'<'}
        </button>
      </nav>
      <DynamicForm data={project} onChange={setProject} />
    </div>
  );
};

export default ProjectNew;
