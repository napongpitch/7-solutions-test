import type { FC } from "react";
import type { TTodoItem } from "../../types/todo";
import { Card, CardContent, Grid2 } from "@mui/material";
import { TodoItem } from "./todo-item";

type TTodoListAllProps = {
  todos: TTodoItem[];
  addTodo: (name: string, type: TTodoItem["type"]) => void;
};

export const TodoListAll: FC<TTodoListAllProps> = ({ todos, addTodo }) => {
  return (
    <Card sx={{ height: "90vh", overflow: "scroll" }}>
      <CardContent>
        <Grid2 container rowSpacing={2}>
          {todos.map(({ name, type }) => (
            <Grid2 size={12} key={name}>
              <TodoItem
                dataTestId={`todo-item-${name}`}
                name={name}
                onClick={() => addTodo(name, type)}
              />
            </Grid2>
          ))}
        </Grid2>
      </CardContent>
    </Card>
  );
};
