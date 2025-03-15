import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListAll } from "../todo-list-all";
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

  it("should be render list TodoItem", () => {
    render(<TodoListAll todos={MOCK_TODOS} addTodo={() => {}} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Broccoli")).toBeInTheDocument();
  });

  it("should call addTodo", () => {
    const addTodo = vi.fn();

    render(<TodoListAll todos={MOCK_TODOS} addTodo={addTodo} />);

    const cardTodo = screen.getByText("Apple");
    fireEvent.click(cardTodo);

    expect(addTodo).toHaveBeenCalled();
  });
});
