import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { TodoItem } from "../todo-item";

describe("<TodoItem />", () => {
  it("should render name correctly", () => {
    render(<TodoItem name="test" onClick={() => {}} />);
    screen.getByText("test");
  });

  it("should call onClick", () => {
    const onClick = vi.fn();

    render(<TodoItem name="test" onClick={onClick} />);

    const cardTodo = screen.getByText("test");
    fireEvent.click(cardTodo);

    expect(onClick).toHaveBeenCalled();
  });
});
