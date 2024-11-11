import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import { GoalsExArr } from '../../../data/hardDt';

interface Props {}

const GoalByLesson: React.FC<Props> = () => {
  return (
    <div>
      <Accordion outerText='afs'>
        <ul className='flex flex-col gap-[8px]'>
          {GoalsExArr.map((dt) => (
            <div key={dt.id}>{dt.title}</div>
          ))}
        </ul>
      </Accordion>
    </div>
  );
};

export default GoalByLesson;
