import { render, screen, fireEvent, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { store } from "../../../store/store";
import userEvent from "@testing-library/user-event";

const MockFollowersList = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<FollowersList />
			</BrowserRouter>
		</Provider>
	);
};

describe("FollowersList", () => {
	beforeEach(() => {
		// console.log("RUNS BEFORE EACH TEST")
		// jest.mock("../../../__mocks__/axios");
		render(<MockFollowersList />);
	});

	// beforeAll(() => {
	//     console.log("RUNS ONCE BEFORE ALL TESTS")
	// })

	// afterEach(() => {
	//     console.log("RUNS AFTER EACH TEST")
	// })

	// afterAll(() => {
	//     console.log("RUNS ONCE AFTER ALL TESTS")
	// })sw

	const removeFollower = async (index) => {
		const removeBtn = await screen.findByTestId(`btn-remove-${index}`);
		return removeBtn;
	};

	it("should render follower item[0]", async () => {
		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should render all follower items", async () => {
		const followerDivElement = await screen.findAllByTestId(/follower-item/i);
		expect(followerDivElement.length).toBe(3);
	});

	it("should refetch all followers", async () => {
		const fetchBtn = screen.getByRole("button", { name: "Fetch" });
		fireEvent.click(fetchBtn);
		const followerDivElement = await screen.findAllByTestId(/follower-item/i);

		expect(followerDivElement.length).toBe(3);
	});

	it("should remove selected follower", async () => {
		const removeBtn = await removeFollower(1);
		fireEvent.click(removeBtn);
		const followerDivElement = await screen.findAllByTestId(/follower-item/i);

		await waitFor(() => {
			expect(screen.queryByTestId("follower-item-1")).not.toBeInTheDocument();
		});
		expect(followerDivElement.length).toBe(2);
	});
});
