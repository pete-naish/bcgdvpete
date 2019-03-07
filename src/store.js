import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import ideas from './reducers';
import sagas from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
  )(createStore);

  const store = createStoreWithMiddleware(
    combineReducers({
      ideas,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  sagaMiddleware.run(sagas);

  return store;
};
