import { fork, all } from "redux-saga/effects";

import { watchGoalUpdated } from "./updateGoal";
import { watchGoalDeleted } from "./deleteGoal";
import { watchGoalFetched } from "./getGoal";
import { watchSingleGoalFetched } from "./getGoalByID";
import { watchGoalAdded } from "./createGoals";

export default function* rootSaga() {
  yield all([
    fork(watchGoalUpdated),
    fork(watchGoalDeleted),
    fork(watchGoalFetched),
    fork(watchSingleGoalFetched),
    fork(watchGoalAdded),
  ]);
}
