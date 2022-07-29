import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe("FollowersList", () => {
	// beforeEach(() => {
	// 	// console.log("RUNS BEFORE EACH TEST")
	// 	jest.mock("../../../__mocks__/axios");
	// });

	// beforeAll(() => {
	//     console.log("RUNS ONCE BEFORE ALL TESTS")
	// })

	// afterEach(() => {
	//     console.log("RUNS AFTER EACH TEST")
	// })

	// afterAll(() => {
	//     console.log("RUNS ONCE AFTER ALL TESTS")
	// })sw

	it("should render follower item[0]", async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should render all follower items", async () => {
		render(<MockFollowersList />);

		const followerDivElement = await screen.findAllByTestId(/follower-item/i);
		expect(followerDivElement.length).toBe(5);
	});
});
