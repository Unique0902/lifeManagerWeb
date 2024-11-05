export interface Habit {
  id: string;
  when: string;
  what: string;
  cycle: string;
  projectId?: string;
}

export type Goal = {
  id: string;
  title: string;
  description: string;
  period: string;
  lessonId?: string;
  parentGoalId?: string;
  isAccomplished: boolean;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  projectId?: string;
  date: string;
  eta: string;
  difficultyLevel: string;
  isAccomplished: boolean;
};

export interface Lesson {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  goalId?: string;
  concrete: string;
  thingToNeed: string[];
  todoIdArr?: string[];
  isAccomplished: boolean;
}
