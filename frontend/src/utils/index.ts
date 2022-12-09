import axios from "axios";

import { Goal, GoalModel } from "../redux/types";

const baseURL = "http://localhost:5000/";

export const client = axios.create({
  baseURL: baseURL,
});

export async function createGoals(goal: GoalModel): Promise<Goal> {
  return client.post("api/goals", goal).then((response) => response.data);
}

export async function getGoals(): Promise<Goal[]> {
  return client
    .get("api/goals")
    .then((response) => response.data)
    .then((goals: Goal[]) =>
      goals.map((goal: Goal, idx: number) => ({
        ...goal,
        id: idx + 1,
      }))
    );
}

export async function getGoalByID(goal: Goal): Promise<Goal> {
  return client
    .get(`api/goals/${goal._id}`)
    .then((response) => response.data);
}

export async function deleteGoal(goal: Goal): Promise<Goal> {
  return client
    .delete(`api/goals/${goal._id}`)
    .then((response) => response.data);
}

export async function updateGoal(goal: Goal): Promise<Goal> {
  return client
    .put(`api/goals/${goal._id}`, goal)
    .then((response) => response.data);
}

export default {
  createGoals,
  getGoals,
  getGoalByID,
  deleteGoal,
  updateGoal,
};
