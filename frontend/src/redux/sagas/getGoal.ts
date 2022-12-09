import { SagaReturnType, put, takeEvery, call } from "redux-saga/effects";
import api from "../../utils";
import { setGoal } from "../slices/goal";

function* get_goal() {
  try {
    const data: SagaReturnType<typeof api.getGoals> = yield call(api.getGoals);
    yield put(setGoal(data));
  } catch (error: any) {
    console.log(error);
  }
}

export function* watchGoalFetched() {
  yield takeEvery("goals/fetch_goal", get_goal);
}
