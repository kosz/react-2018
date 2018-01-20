import { put, takeEvery } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* denyIncrement(action) {
   try {
      yield put({type: "DECREMENT"});
   } catch (e) {
      yield put({type: "DECREMENT"});
   }
}

function* mySaga() {
  yield takeEvery("INCREMENT", denyIncrement);
}

export default mySaga;
