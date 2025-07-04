/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "./axiosInstance";

export async function loginWithGoogle(idToken: string | null) {
    try {
        // await the request and pull out .data in one step
        const { data } = await axiosInstance.post(
            "/api/v1/user/google",
            { idToken },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );

        return data;
    } catch (error: any) {
        console.error("Google login failed:", error.response ?? error);
        // rethrow or wrap the error however you like
        throw error;
    }
}
