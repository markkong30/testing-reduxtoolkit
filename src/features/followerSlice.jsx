import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  followers: []
}

export const fetchFollowers = createAsyncThunk('/posts', async () => {
  const { data } = await axios.get("https://randomuser.me/api/?results=5");

  return data.results;
})

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {
    removeFollower: (state, action) => {
      const follower = state.followers.findIndex(ele => ele.cell == action.payload);
      state.followers.splice(follower, 1);
    }
  },
  extraReducers: {
    [fetchFollowers.fulfilled]: (state, action) => {
      state.followers = action.payload;
    }
  }
});

export const { removeFollower } = followersSlice.actions;

export const getFollowers = state => state.followers;

export default followersSlice.reducer;