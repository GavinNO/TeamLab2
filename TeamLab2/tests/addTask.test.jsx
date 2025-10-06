import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

test("adds a new task to a list", () => {
  render(<App />);

  // Add new list
  const inputList = screen.getByPlaceholderText(/enter list name/i);
  const addListBtn = screen.getByRole("button", { name: /add list/i });
  fireEvent.change(inputList, { target: { value: "Test List" } });
  fireEvent.click(addListBtn);

  // Open list
  const openButton = screen.getByText(/open/i);
  fireEvent.click(openButton);

  // Add new task
  const inputTask = screen.getByPlaceholderText(/enter task name/i);
  const addTaskBtn = screen.getByRole("button", { name: /add task/i });
  fireEvent.change(inputTask, { target: { value: "First Task" } });
  fireEvent.click(addTaskBtn);

  // Verify new task appears
  expect(screen.getByText("First Task")).toBeInTheDocument();
});
