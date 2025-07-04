// src/store/api/user/userInitialStateStore.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// 1) Define a user object interface
export interface UserData {
    _id: string;
    name: string;
    email: string;
    picture: string;
    role: string;
}

// 2) Extend state to hold the user object
interface UserState {
    // isLoggedInUser: boolean;
    user: UserData | null;
}

// 3) Initialize from localStorage
const savedUser = localStorage.getItem("user");
const initialState: UserState = {
    // isLoggedInUser: savedUser === "true" || false,
    user: savedUser ? JSON.parse(savedUser) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // toggle the boolean flag

        // new action: store the full user object
        setUser(state, action: PayloadAction<UserData>) {
            state.user = action.payload;
            // persist for reloads
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        clearUserData(state) {
            state.user = null;
            localStorage.removeItem("user");
            // if you also persist an auth token:
            // localStorage.removeItem("authToken");
        },
    },
});

export const { setUser, clearUserData } = userSlice.actions;
export default userSlice.reducer;
