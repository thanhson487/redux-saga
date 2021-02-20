import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./../reducers";
import rootSaga from "./../sagas/index";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        shouldHotReload: false,
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
 
};

export default configureStore;
