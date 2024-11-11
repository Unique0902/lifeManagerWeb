export interface Habit {
  id: string;
  when: string;
  what: string;
  cycle: string;
  projectId?: string;
}

export type TGoal = {
  id: string;
  title: string;
  description: string;
  period: string;
  lessonId?: string;
  subGoal?: SubGoal[];
  isAccomplished: boolean;
};

export type SubGoal = {
  id: string;
  title: string;
  description: string;
  period: string;
  subGoal?: SubGoal[];
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
