import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

test("filters tasks correctly", () => {
  render(<App />);

  // Add a new list
  const listInput = screen.getByPlaceholderText(/enter list name/i);
  const addListBtn = screen.getByRole("button", { name: /add list/i });
  fireEvent.change(listInput, { target: { value: "Filter Test" } });
  fireEvent.click(addListBtn);
  fireEvent.click(screen.getByText(/open/i));

  // Add two tasks
  const taskInput = screen.getByPlaceholderText(/enter task name/i);
  const addTaskBtn = screen.getByRole("button", { name: /add task/i });

  fireEvent.change(taskInput, { target: { value: "Active Task" } });
  fireEvent.click(addTaskBtn);
  fireEvent.change(taskInput, { target: { value: "Completed Task" } });
  fireEvent.click(addTaskBtn);

  // Mark one task complete
  const checkboxes = screen.getAllByRole("checkbox");
  fireEvent.click(checkboxes[1]); // Complete second task

  // Apply "Completed" filter
  const completedBtn = screen.getByRole("button", { name: /completed/i });
  fireEvent.click(completedBtn);
  expect(screen.getByText("Completed Task")).toBeInTheDocument();
  expect(screen.queryByText("Active Task")).not.toBeInTheDocument();

  // Apply "Active" filter
  const activeBtn = screen.getByRole("button", { name: /active/i });
  fireEvent.click(activeBtn);
  expect(screen.getByText("Active Task")).toBeInTheDocument();
  expect(screen.queryByText("Completed Task")).not.toBeInTheDocument();
});
