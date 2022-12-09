import { SagaReturnType, put, takeEvery, call } from "redux-saga/effects";
import api from "../../utils";
import { goalAction, createGoals } from "../slices/goal";

function* create_goal(action: goalAction) {
  try {
    const data: SagaReturnType<typeof api.createGoals> = yield call(
      api.createGoals,
      action.payload
    );
    yield put(createGoals(data));
  } catch (error: any) {
    console.log(error);
  }
}

export function* watchGoalAdded() {
  yield takeEvery("goals/create_goal_requested", create_goal);
}
