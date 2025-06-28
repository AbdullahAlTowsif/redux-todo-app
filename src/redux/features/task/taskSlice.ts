import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [],
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(), isCompleted: false, ...taskData
  }
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false
      // }
      const taskData = createTask(action.payload)
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
