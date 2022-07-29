import { configureStore } from "@reduxjs/toolkit";
import followersReducer from "../features/followerSlice";

export const store = configureStore({
	reducer: {
		followers: followersReducer,
	},
});
