import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header render a title prop", () => {
	render(<Header title="todo" />);

	const headerEl = screen.getByRole("heading", { name: "todo" });
	expect(headerEl).toBeInTheDocument();
});

test("Wrong header text should not exist", () => {
	render(<Header title="todo" />);

	const headerEl = screen.queryByText(/hiMom/i);
	expect(headerEl).not.toBeInTheDocument();
});

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i });
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// it('should render same text passed into title prop', async () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });
