import { put, takeEvery, call, SagaReturnType } from "redux-saga/effects";
import api from "../../utils";
import { goalAction, getGoalByID } from "../slices/goal";

function* get_GoalBy_ID(action: goalAction) {
  try {
    const data: SagaReturnType<typeof api.getGoalByID> = yield call(
      api.getGoalByID,
      action.payload
    );
    yield put(getGoalByID(action.payload));
  } catch (error: any) {
    console.log(error);
  }
}

export function* watchSingleGoalFetched() {
  yield takeEvery("goals/get_single_goal_requested", get_GoalBy_ID);
}
