import type { RootState } from "@/redux/store";
import type { IUser } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "UVQ0jkOhapB3QUgHq5jBY",
      name: "Mir",
    },
    {
      id: "UVQ0jkOhapB3QUgHq5jBYrrr",
      name: "Mezba",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
