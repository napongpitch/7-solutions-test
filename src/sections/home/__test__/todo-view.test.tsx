import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TodoView } from "../view/todo-view";

describe("<TodoView />", () => {
  it("should be render", () => {
    render(<TodoView />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Fruit")).toBeInTheDocument();
    expect(screen.getByText("Vegetable")).toBeInTheDocument();
  });

  it("should call add todo Fruit List", () => {
    render(<TodoView />);

    const cardTodoApple = screen.getByTestId("todo-item-Apple");
    fireEvent.click(cardTodoApple);

    expect(screen.getByTestId("todo-item-Fruit-Apple")).toBeInTheDocument();
  });

  it("should call add todo Vegetable List", () => {
    render(<TodoView />);

    const cardTodoTomato = screen.getByTestId("todo-item-Tomato");
    fireEvent.click(cardTodoTomato);

    expect(
      screen.getByTestId("todo-item-Vegetable-Tomato")
    ).toBeInTheDocument();
  });

  it("should be return todo list when click removeTodo", () => {
    render(<TodoView />);

    const cardTodoApple = screen.getByTestId("todo-item-Apple");
    fireEvent.click(cardTodoApple);

    const cardTodoFruitApple = screen.getByTestId("todo-item-Fruit-Apple");

    expect(cardTodoFruitApple).toBeInTheDocument();

    fireEvent.click(cardTodoFruitApple);

    expect(screen.getByTestId("todo-item-Apple")).toBeInTheDocument();
  });

  it("should be auto return todo list after 5sec", async () => {
    render(<TodoView />);

    const cardTodoApple = screen.getByTestId("todo-item-Apple");
    fireEvent.click(cardTodoApple);

    expect(screen.getByTestId("todo-item-Fruit-Apple")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByTestId("todo-item-Apple")).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  }, 6000);
});
