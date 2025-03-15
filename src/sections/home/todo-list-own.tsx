import type { FC } from "react";
import type { TTodoItem } from "../../types/todo";
import { Card, CardHeader, CardContent, Grid2 } from "@mui/material";
import { TodoItem } from "./todo-item";

type TTodoListOwnProps = {
  todoName: string;
  todos: TTodoItem[];
  removeTodo: (name: string, type: TTodoItem["type"]) => void;
};

export const TodoListOwn: FC<TTodoListOwnProps> = ({
  todoName,
  todos,
  removeTodo,
}) => {
  return (
    <Card sx={{ height: "calc(100vh - 60px)", overflow: "scroll" }}>
      <CardHeader title={todoName} />
      <CardContent>
        <Grid2 container rowSpacing={2}>
          {todos.map(({ name, type }) => (
            <Grid2 size={12} key={name}>
              <TodoItem
                dataTestId={`todo-item-${type}-${name}`}
                name={name}
                onClick={() => removeTodo(name, type)}
              />
            </Grid2>
          ))}
        </Grid2>
      </CardContent>
    </Card>
  );
};
