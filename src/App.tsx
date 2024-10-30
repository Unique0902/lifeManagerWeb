import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo/Todo';
import Project from './pages/Project/Project';
import Lesson from './pages/Lesson/Lesson';
import Habit from './pages/Habit/Habit';
import Goal from './pages/Goal/Goal';
import { useState } from 'react';

function App() {
  const [isNavOn, setIsNavOn] = useState<boolean>(false);
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
              <Link to='/'>todo</Link>
              <Link to='/goal'>goal</Link>
              <Link to='/habit'>habit</Link>
              <Link to='/lesson'>lesson</Link>
              <Link to='/project'>project</Link>
              <button onClick={() => setIsNavOn(false)}> {'<'} </button>
            </nav>
          )}
          <main className='bg-[#CCCCCC] flex-1 mx-[12px] p-[12px]'>
            <Routes>
              <Route path='/goal' element={<Goal />} />
              <Route path='/habit' element={<Habit />} />
              <Route path='/lesson' element={<Lesson />} />
              <Route path='/project' element={<Project />} />
              <Route path='/' element={<Todo />} />
            </Routes>
          </main>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
