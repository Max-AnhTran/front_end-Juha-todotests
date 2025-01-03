export interface Todo {
  description: string;
  date: string;
}

export interface TodoTableProps {
  todos: Todo[];
}