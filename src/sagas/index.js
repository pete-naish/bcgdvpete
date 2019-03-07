import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import ideaActions, { IdeaActionTypes } from '../actions/idea-actions';

function* fetchIdeas() {
  const ideas = yield fetch('https://bcgdvpete.mockable.io/ideas').then(response => response.json());
  yield put(ideaActions.storeIdeas(ideas));
}

function* createIdea() {
  const newIdea = yield fetch('https://bcgdvpete.mockable.io/ideas/new').then(response => response.json());
  yield put(ideaActions.storeNewIdea(newIdea));
}

function* actionWatcher() {
  yield takeLatest(IdeaActionTypes.GET_IDEAS, fetchIdeas);
  yield takeEvery(IdeaActionTypes.CREATE_IDEA, createIdea);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
