import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

test("persists lists and tasks between reloads", () => {
  const { unmount } = render(<App />);

  // Add a list and a task
  fireEvent.change(screen.getByPlaceholderText(/enter list name/i), { target: { value: "Persist List" } });
  fireEvent.click(screen.getByRole("button", { name: /add list/i }));
  fireEvent.click(screen.getByText(/open/i));
  fireEvent.change(screen.getByPlaceholderText(/enter task name/i), { target: { value: "Persist Task" } });
  fireEvent.click(screen.getByRole("button", { name: /add task/i }));

  // Unmount (simulate reload)
  unmount();

  // Re-render app
  render(<App />);

  // List and task should reappear
  expect(screen.getByText(/persist list/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/open/i));
  expect(screen.getByText(/persist task/i)).toBeInTheDocument();
});
