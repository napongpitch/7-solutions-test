import { Grid2 } from "@mui/material";
import { useRef, useState, type FC } from "react";
import type { TTodoItem, TTodoType } from "../../../types/todo";
import { TodoListAll } from "../todo-list-all";
import { TodoListOwn } from "../todo-list-own";

export const TodoView: FC = () => {
  const refTimeouts = useRef<{ name: string; timeout: number }[]>([]);
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [todoVegetables, setTodoVegetables] = useState<TTodoItem[]>([]);
  const [todoFruits, setTodoFruits] = useState<TTodoItem[]>([]);

  const onAddTodo = (name: string, type: TTodoType) => {
    setTodos((prev) => prev.filter((todo) => todo.name !== name));
    if (type === "Vegetable") {
      setTodoVegetables((prev) => [...prev, { name, type }]);
    } else {
      setTodoFruits((prev) => [...prev, { name, type }]);
    }

    const timeout = setTimeout(() => {
      onRemoveTodo(name, type);
    }, 5000);

    refTimeouts.current.push({ name, timeout });
  };

  const onRemoveTodo = (name: string, type: TTodoType) => {
    const timeout = refTimeouts.current.find(
      (timeout) => timeout.name === name
    )?.timeout;

    if (timeout) clearTimeout(timeout);
    refTimeouts.current = refTimeouts.current.filter(
      (timeout) => timeout.name !== name
    );

    if (type === "Vegetable") {
      setTodoVegetables((prev) => prev.filter((todo) => todo.name !== name));
    } else {
      setTodoFruits((prev) => prev.filter((todo) => todo.name !== name));
    }
    setTodos((prev) => [...prev, { name, type }]);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <TodoListAll todos={todos} addTodo={onAddTodo} />
      </Grid2>
      <Grid2 size={4}>
        <TodoListOwn
          todoName="Fruit"
          todos={todoFruits}
          removeTodo={onRemoveTodo}
        />
      </Grid2>
      <Grid2 size={4}>
        <TodoListOwn
          todoName="Vegetable"
          todos={todoVegetables}
          removeTodo={onRemoveTodo}
        />
      </Grid2>
    </Grid2>
  );
};

// ----------------------------------------
const MOCK_TODOS: TTodoItem[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];
