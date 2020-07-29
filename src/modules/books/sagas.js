import { takeLatest, all, put, call } from 'redux-saga/effects';
import Api from 'services/api';

function* getBookWatcher() {
  yield takeLatest('BOOKS/GET_BOOK', getBookEffect);
}

function* getBookEffect(action) {
  try {
    yield put({ type: 'BOOKS/GET_BOOK_REQUEST' });
    const { isbn } = action.payload;
    const response = yield call(Api.getBook, isbn);
    yield put({ type: 'BOOKS/GET_BOOK_SUCCESS', payload: { book: response } });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: 'BOOKS/GET_BOOK_FAILURE' });
  }
}

export default function* booksWatcher() {
  yield all([
    getBookWatcher()
  ]);
};