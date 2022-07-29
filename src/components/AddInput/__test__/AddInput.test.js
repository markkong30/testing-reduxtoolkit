import { render, screen, fireEvent } from "@testing-library/react";
import { exp } from "prelude-ls";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
	it("should render input element", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});

	it("should be able to type into input", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElement, { target: { value: "Hi Mom" } });
		expect(inputElement.value).toBe("Hi Mom");
	});

	it("should call 'setToDos' usestate Func when typing", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
		fireEvent.change(inputEl, { target: { value: "Hi Mom" } });
		const buttonEl = screen.getByTestId("btn-add");
		fireEvent.click(buttonEl);
		expect(mockedSetTodo).toBeCalled();
	});

	it("should have empty input after add button is clicked", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElement, { target: { value: "Hi Mom" } });
		const buttonElement = screen.getByRole("button", { name: /add/i });
		fireEvent.click(buttonElement);
		expect(inputElement.value).toBe("");
	});
});
