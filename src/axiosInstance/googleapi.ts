import { axiosInstance } from "./axiosInstance";

export async function loginWithGoogle(idToken: string) {
    try {
        const response = axiosInstance.post(
            "/api/v1/user/google",
            { idToken },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                // include cookies (e.g. HTTP-only cookies set by server)
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        // you can inspect error.response for status / payload
        console.error("Google login failed:", error);
        throw error;
    }
}
