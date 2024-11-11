import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import { projectsExArr } from '../../../data/hardDt';

interface Props {}

const ProjectByGoal: React.FC<Props> = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Outer>asfasf</Accordion.Outer>
        <Accordion.Inner>
          <ul className='flex flex-col gap-[8px]'>
            {projectsExArr.map((dt) => (
              <div key={dt.id}>{dt.title}</div>
            ))}
          </ul>
        </Accordion.Inner>
      </Accordion>
    </div>
  );
};

export default ProjectByGoal;
