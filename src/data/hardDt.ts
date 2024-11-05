import { Goal, Habit, Lesson, Project, Todo } from './type';

export const HabitsExArr: Habit[] = [
  { id: 'h1', when: '저녁먹고', what: '운동', projectId: 'p1', cycle: '매일' },
  { id: 'h2', when: '일어나서', what: '독서', cycle: '매일' },
];

export const GoalsExArr: Goal[] = [
  {
    id: 'gr1',
    title: '상위목표1',
    description: '상위목표1 설명',
    period: '2024-11-01~2024-12-04',
    lessonId: 'l1',
    isAccomplished: false,
  },
  {
    id: 'gsr1',
    title: '하위목표1',
    description: '하위목표1 설명',
    period: '2024-11-01~2024-12-04',
    lessonId: 'l1',
    parentGoalId: 'gr1',
    isAccomplished: true,
  },
];

export const todosExArr: Todo[] = [
  {
    id: 't1',
    title: '할일1',
    description: '할일1 설명',
    projectId: 'p1',
    date: '2024-06-10-19:00',
    eta: '30분',
    difficultyLevel: '3',
    isAccomplished: false,
  },
  {
    id: 't2',
    title: '할일2',
    description: '할일2 설명',
    date: '2024-06-15-14:00',
    eta: '최소 6시간',
    difficultyLevel: '7',
    isAccomplished: false,
  },
];

export const todayTodosExArr: Todo[] = [
  {
    id: 't1',
    title: '할일1',
    description: '할일1 설명',
    projectId: 'p1',
    date: '2024-06-10 19:00',
    eta: '30분',
    difficultyLevel: '3',
    isAccomplished: false,
  },
  {
    id: 't2',
    title: '할일2',
    description: '할일2 설명',
    date: '2024-06-10 14:00',
    eta: '최소 6시간',
    difficultyLevel: '7',
    isAccomplished: false,
  },
  {
    id: 't3',
    title: '할일3',
    description: '할일3 설명',
    date: '2024-06-10 14:00',
    eta: '최소 6시간',
    difficultyLevel: '7',
    isAccomplished: false,
  },
];

export const lessonsExArr: Lesson[] = [
  { id: 'l1', title: '교훈1', description: '교훈1 설명' },
  { id: 'l2', title: '교훈2', description: '교훈2 설명' },
];

export const projectsExArr: Project[] = [
  {
    id: 'p1',
    goalId: 'g1',
    concrete: '프로젝트1 구체상',
    thingToNeed: ['프로젝트1 준비물1', '프로젝트2 준비물2'],
    todoIdArr: ['t1'],
    isAccomplished: false,
  },
];
