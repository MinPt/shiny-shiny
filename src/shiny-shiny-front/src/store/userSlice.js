import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../services/eneties/user";

const initialState = {
  users: [{ name: "petro", email: "31231@fdsa.ew" }],
};

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (userId) => {
    const user = UserApi.deleteUser(userId);
    return user;
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const users = await UserApi.getUsers();
  return users;
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const createdUser = await UserApi.createUser(user);
  return createdUser;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [removeUser.fulfilled]: (state, action) => {
      const users = state.users.filter(
        (user) => user._id !== action.payload._id
      );
      state.users = users;
    },
    [createUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
