export interface GoalModel {
  Name: string;
  DateOfBirth: string;
  Gender: string;
  Salary: string;
  id?: number;
}

export interface Goal extends GoalModel {
  _id: string;
}

export interface GoalState {
  goals: Array<Goal>;
  isLoading: boolean;
}
