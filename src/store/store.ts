// src/store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./api/user/userInitialStateStore";
import { baseApi } from "./api/baseApiSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"], // केवल user slice को persist करना है
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
