// src/redux/api/baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosInstance/axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    endpoints: () => ({}), // Initialize with empty endpoints
    tagTypes: ["User", "Post"], // Define global tag types
});
