import {takeLatest, all, put, call} from 'redux-saga/effects';
import actions from './actions';
import Api from 'services/Api';

function* getBookWatcher() {
  yield takeLatest('BOOKS/GET_BOOK', getBookEffect);
}
function* getBookEffect(action) {
  try {
    yield put(actions.getBookRequest());
    const {isbn} = action.payload;
    const response = yield call(() => {
      return Api.getBook(isbn)
        .then(res => {
          // console.log("res", res)
          return res;
        })
    });
    yield put(actions.getBookSuccess(response));
  } catch (error) {
    console.log("Error", error);
    yield put(actions.getBookFailure());
  }
}

export default function* booksWatcher() {
  yield all([
    getBookWatcher(),
  ]);
};