import React from 'react';
import { projectsExArr } from '../../data/hardDt';
import Accordion from '../../components/Accordion/Accordion';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Project: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col gap-[8px]'>
        {projectsExArr.map((dt) => (
          <Accordion key={dt.id}>
            <Accordion.Outer>
              <div className='flex flex-row gap-[12px]'>
                <p>{dt.title}</p>
                <input type='checkbox' />
                <button onClick={() => navigate('/project/edit')}>수정</button>
                <button>삭제</button>
              </div>
            </Accordion.Outer>
            <Accordion.Inner>
              <p>구체상: {dt.concrete}</p>
              <div>
                <p>준비물:</p>
                <ul>
                  {dt.thingToNeed.map((thing, thingIdx) => (
                    <div key={thing} className='flex flex-row gap-[12px]'>
                      <p>{thingIdx + 1}</p>
                      <p>{thing}</p>
                      <button>수정</button>
                      <button>삭제</button>
                    </div>
                  ))}
                  <li className='cursor-pointer'>추가</li>
                </ul>
              </div>
              <div>
                <p>steps:</p>
                <ul>
                  {dt.todoIdArr && (
                    <>
                      {dt.todoIdArr.map((todo, todoIdx) => (
                        <div key={todo} className='flex flex-row gap-[12px]'>
                          <p>{todoIdx + 1}</p>
                          <p>{todo}</p>
                          <button onClick={() => navigate('/todo/edit')}>
                            수정
                          </button>
                          <button>삭제</button>
                        </div>
                      ))}
                    </>
                  )}
                  <li
                    className='cursor-pointer'
                    onClick={() => navigate('/todo/new')}
                  >
                    추가
                  </li>
                </ul>
              </div>
            </Accordion.Inner>
          </Accordion>
        ))}
        <div
          className='cursor-pointer'
          onClick={() => navigate('/project/new')}
        >
          추가
        </div>
      </div>
    </>
  );
};

export default Project;
