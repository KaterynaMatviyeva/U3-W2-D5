import { iTodo } from './i-todo';

export interface iUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todos?: iTodo[];
}
