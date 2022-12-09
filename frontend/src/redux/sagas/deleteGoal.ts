import { SagaReturnType, put, takeEvery, call } from "redux-saga/effects";
import api from "../../utils";
import { goalAction, deleteGoal } from "../slices/goal";

function* delete_goal(action: goalAction) {
  try {
    const data: SagaReturnType<typeof api.deleteGoal> = yield call(
      api.deleteGoal,
      action.payload
    );
    yield put(deleteGoal(action.payload));
  } catch (error: any) {
    console.log(error);
  }
}

export function* watchGoalDeleted() {
  yield takeEvery("goals/delete_goal_requested", delete_goal);
}
