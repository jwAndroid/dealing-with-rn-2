import { atom, selector } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState = {
  key: 'todosState',
  default: [
    { id: 1, text: 'hi1', done: true },
    { id: 2, text: 'hi2', done: false },
  ],
};

export const todosState = atom<Todo[]>(initialState);

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({ get }) => {
    const todos = get(todosState);

    const lastId = todos[todos.length - 1]?.id ?? 0;

    return lastId + 1;
  },
});
