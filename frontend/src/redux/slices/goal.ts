import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goal, GoalModel, GoalState } from "../types";

let initialState: GoalState = {
  goals: [],
  isLoading: false,
};

export const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    create_goal_requested: (state, action: PayloadAction<GoalModel>) => state,
    delete_goal_requested: (state, action: PayloadAction<Goal>) => state,
    update_goal_requested: (state, action: PayloadAction<Goal>) => state,
    get_single_goal_requested: (state, action: PayloadAction<Goal>) => state,

    getGoals: (state) => {
      state.isLoading = true;
    },
    createGoals: (state, action: PayloadAction<Goal>) => {
      state.goals.push({
        ...action.payload,
      });
    },
    getGoalByID: (state, action: PayloadAction<Goal>) => {
      state.goals = state.goals.filter(
        (goal) => goal._id == action.payload._id
      );
    },
    deleteGoal: (state, action: PayloadAction<Goal>) => {
      state.goals = state.goals.filter(
        (goal) => goal._id !== action.payload._id
      );
    },
    updateGoal: (state, action: PayloadAction<Goal>) => {
      state.goals = state.goals.map((goal) => {
        return goal._id === action.payload._id
          ? {
              ...goal,
              ...action.payload,
            }
          : goal;
      });
    },
    setGoal: (state, action: PayloadAction<Goal[]>) => {
      state.goals = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  createGoals,
  getGoalByID,
  deleteGoal,
  updateGoal,
  setGoal,
  create_goal_requested,
  get_single_goal_requested,
  delete_goal_requested,
  update_goal_requested,
} = goalSlice.actions;
export type goalAction = ReturnType<typeof createGoals>;
export default goalSlice.reducer;
