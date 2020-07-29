import {all, fork} from 'redux-saga/effects';
import {sagas as booksSaga} from 'modules/books'

export default function* rootSaga() {
  yield all([
    fork(booksSaga),
  ]);
}