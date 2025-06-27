import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "shkjdfljfdsdjfl",
      title: "Initialized frontend",
      description: "Create Home Page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "shkjdfljfdshsdghsdhdjfl",
      title: "Initialized backend",
      description: "Create task Page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;
