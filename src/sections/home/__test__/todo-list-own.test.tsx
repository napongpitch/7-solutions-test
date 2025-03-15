import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListOwn } from "../todo-list-own";
import type { TTodoItem } from "../../../types/todo";
import { vi } from "vitest";

describe("<TodoListAll />", () => {
  const MOCK_TODOS: TTodoItem[] = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
  ];

  it("should be render todoName", () => {
    render(<TodoListOwn todoName="Test" todos={[]} removeTodo={() => {}} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should be render list TodoItem", () => {
    render(
      <TodoListOwn todoName="Fruit" todos={MOCK_TODOS} removeTodo={() => {}} />
    );
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Broccoli")).toBeInTheDocument();
  });

  it("should call addTodo", () => {
    const removeTodo = vi.fn();

    render(
      <TodoListOwn
        todoName="Fruit"
        todos={MOCK_TODOS}
        removeTodo={removeTodo}
      />
    );

    const cardTodo = screen.getByText("Apple");
    fireEvent.click(cardTodo);

    expect(removeTodo).toHaveBeenCalled();
  });
});
