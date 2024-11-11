import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import { HabitsExArr } from '../../../data/hardDt';

interface Props {}

const HabitByProject: React.FC<Props> = () => {
  return (
    <div>
      <Accordion outerText='afs'>
        <ul className='flex flex-col gap-[8px]'>
          {HabitsExArr.map((dt) => (
            <div key={dt.id}>{dt.what}</div>
          ))}
        </ul>
      </Accordion>
    </div>
  );
};

export default HabitByProject;
