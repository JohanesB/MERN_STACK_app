import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import goalReducer from "./slices/goal";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    goalReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
