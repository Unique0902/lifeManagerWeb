import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo/Todo';
import Project from './pages/Project/Project';
import Lesson from './pages/Lesson/Lesson';
import Habit from './pages/Habit/Habit';
import Goal from './pages/Goal/Goal';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import GoalByLesson from './pages/Goal/ByLesson/GoalByLesson';
import GoalRootEdit from './pages/Goal/Root/Edit/GoalRootEdit';
import GoalRootNew from './pages/Goal/Root/New/GoalRootNew';
import GoalSubRootEdit from './pages/Goal/SubRoot/Edit/GoalSubRootEdit';
import GoalSubRootNew from './pages/Goal/SubRoot/New/GoalSubRootNew';
import HabitByProject from './pages/Habit/ByProject/\bHabitByProject';
import HabitEdit from './pages/Habit/Edit/HabitEdit';
import HabitNew from './pages/Habit/New/HabitNew';
import LessonEdit from './pages/Lesson/Edit/LessonEdit';
import LessonNew from './pages/Lesson/New/LessonNew';
import ProjectByGoal from './pages/Project/ByGoal/ProjectByGoal';
import ProjectEdit from './pages/Project/Edit/ProjectEdit';
import ProjectNew from './pages/Project/New/ProjectNew';
import TodoNew from './pages/Todo/New/TodoNew';
import TodoEdit from './pages/Todo/Edit/TodoEdit';
import TodoMonth from './pages/Todo/Month/TodoMonth';
import TodoDaily from './pages/Todo/Daily/TodoDaily';
import TodoWall from './pages/Todo/Wall/TodoWall';

interface Page {
  title: string;
  link: string;
}

const pageDataArr = [
  {
    title: '일정',
    link: 'todo',
    subPage: [
      { title: '오늘 할일', link: '' },
      { title: '월별', link: '/month' },
      { title: '일별', link: '/daily' },
      { title: '할일 추가', link: '/new' },
    ],
  },
  {
    title: '목표',
    link: 'goal',
    subPage: [
      { title: '목표', link: '' },
      { title: '교훈별', link: '/byLesson' },
    ],
  },
  {
    title: '습관',
    link: 'habit',
    subPage: [
      { title: '습관', link: '' },
      { title: '프로젝트별', link: '/byProject' },
    ],
  },
  {
    title: '교훈',
    link: 'lesson',
  },
  {
    title: '프로젝트',
    link: 'project',
    subPage: [
      { title: '습관', link: '' },
      { title: '목표별', link: '/byGoal' },
    ],
  },
];

function App() {
  const [isNavOn, setIsNavOn] = useState<boolean>(false);
  const [isSubNavOn, setIsSubNavOn] = useState<boolean>(false);
  const [nowPage, setNowPage] = useState<Page | undefined>();
  const [subNavData, setSubNavData] = useState<Page[]>([]);

  useEffect(() => {
    const nowPageData = pageDataArr.find((dt) =>
      window.location.pathname.includes(dt.link)
    );
    setNowPage(nowPageData);
    setSubNavData(nowPageData?.subPage || []);
  }, [window.location.pathname]);

  return (
    <BrowserRouter>
      <div className='bg-[#19AFEA] w-screen h-screen text-white '>
        <header className='px-[12px] flex flex-row gap-[24px] py-[12px]'>
          <Link to='/'>Life Manager</Link>
          {!isNavOn && <button onClick={() => setIsNavOn(true)}>menu</button>}
        </header>
        <section className='flex flex-row'>
          {isNavOn && (
            <nav className='flex flex-col gap-[12px] px-[8px] py-[16px]'>
              <button onClick={() => setIsNavOn(false)} className=' '>
                {'X'}
              </button>
              <button onClick={() => setIsSubNavOn((prev) => !prev)}>
                세부
              </button>
              {isSubNavOn ? (
                <>
                  {subNavData.map((dt) => (
                    <Link to={(nowPage?.link || '') + dt.link} key={dt.title}>
                      {dt.title}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {pageDataArr.map((dt) => (
                    <Link to={dt.link} key={dt.title}>
                      {dt.title}
                    </Link>
                  ))}
                </>
              )}
            </nav>
          )}
          <main className='bg-[#CCCCCC] flex-1 mx-[12px] p-[12px]'>
            <Routes>
              <Route path='/goal'>
                <Route path='' element={<Goal />} />
                <Route path='byLesson' element={<GoalByLesson />} />
                <Route path='root'>
                  <Route path='edit' element={<GoalRootEdit />} />
                  <Route path='new' element={<GoalRootNew />} />
                </Route>
                <Route path='subRoot'>
                  <Route path='edit' element={<GoalSubRootEdit />} />
                  <Route path='new' element={<GoalSubRootNew />} />
                </Route>
              </Route>
              <Route path='/habit'>
                <Route path='' element={<Habit />} />
                <Route path='byProject' element={<HabitByProject />} />
                <Route path='edit' element={<HabitEdit />} />
                <Route path='new' element={<HabitNew />} />
              </Route>
              <Route path='/lesson'>
                <Route path='' element={<Lesson />} />
                <Route path='edit' element={<LessonEdit />} />
                <Route path='new' element={<LessonNew />} />
              </Route>
              <Route path='/project'>
                <Route path='' element={<Project />} />
                <Route path='byGoal' element={<ProjectByGoal />} />
                <Route path='edit' element={<ProjectEdit />} />
                <Route path='new' element={<ProjectNew />} />
              </Route>
              <Route path='/todo'>
                <Route path='' element={<Todo />} />
                <Route path='new' element={<TodoNew />} />
                <Route path='edit' element={<TodoEdit />} />
                <Route path='month' element={<TodoMonth />} />
                <Route path='daily' element={<TodoDaily />} />
                <Route path='wall' element={<TodoWall />} />
              </Route>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
