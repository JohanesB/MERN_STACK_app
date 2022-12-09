import { put, takeEvery, call, SagaReturnType } from "redux-saga/effects";
import api from "../../utils";
import { goalAction, updateGoal } from "../slices/goal";

function* update_goal(action: goalAction) {
  try {
    const data: SagaReturnType<typeof api.updateGoal> = yield call(
      api.updateGoal,
      action.payload
    );
    yield put(updateGoal(data));
  } catch (error: any) {
    console.log(error);
  }
}

export function* watchGoalUpdated() {
  yield takeEvery("goals/update_goal_requested", update_goal);
}
