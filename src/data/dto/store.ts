import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const initialState = {};
let middleware: any[] = [];
const persistConfig = {
  // Root?
  key: "root",
  storage: storage,
  blacklist: [""],
};
const persistReduce = persistReducer(persistConfig, reducers);
if (import.meta.env.NODE_ENV === "development") {
  const reduxImmutableStateInvariant =
    require("redux-immutable-state-invariant").default();
  middleware = [...middleware, reduxImmutableStateInvariant, thunk];
} else {
  middleware = [...middleware, thunk];
}

let store = configureStore({
  reducer: persistReduce,
  middleware: middleware,
  preloadedState: initialState,
  devTools: import.meta.env.NODE_ENV === "development",
});
let persistor = persistStore(store);

export default {
  store,
  persistor,
};
