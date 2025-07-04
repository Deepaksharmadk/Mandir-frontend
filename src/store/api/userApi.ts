// src/store/api/userApi.ts
import { baseApi } from "./baseApiSlice";
// Request payload for registration
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

// Request payload for login
export interface LoginRequest {
    email: string;
    password: string;
}

// Response type from server after login or register
export interface AuthResponse {
    massage: string;
    user: {
        id: string;
        name: string;
        email: string;
        picture: string;
        role: string;
        // Add other user fields if needed
    };
}

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<void, void>({
            query: () => ({
                url: "/api/v1/auth/profile",
                method: "GET",
                // credentials: "include",
                // Important for sending cookies
            }),
        }),
        registerEmail: builder.mutation<AuthResponse, RegisterRequest>({
            query: (body) => ({
                url: "/api/v1/auth/signup",
                method: "POST",
                data: body,
                withCredentials: true,
            }),
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),

        loginEmail: builder.mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: "/api/v1/auth/login",
                method: "POST",
                data: body,
                // withCredentials: true,
            }),
        }),
        logoutUser: builder.mutation<AuthResponse, void>({
            query: () => ({
                url: "/api/v1/auth/logout",
                method: "POST",
                // 🔥 Important: send cookies
                // withCredentials: true,
                // withCredentials: true,
                credentials: "include",
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useRegisterEmailMutation,
    useLoginEmailMutation,
    useLogoutUserMutation,
    useGetProfileQuery,
} = userApi;
