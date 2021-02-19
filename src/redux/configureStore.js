import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./../reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        shouldHotReload: false,
      })
    : compose;

const configureStore = () => {
  const middleware = [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, enhancer);

  return store;
};
export default configureStore;
