import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import { axiosInstance } from "./axiosInstance";
import type { AxiosRequestConfig, AxiosError } from "axios";

type AxiosBaseQueryArgs = {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
};

// Customize error shape
type AxiosBaseQueryError = {
    status?: number;
    data: unknown;
};

const axiosBaseQuery =
    (): BaseQueryFn<
        AxiosBaseQueryArgs, // Args
        unknown, // Result
        AxiosBaseQueryError // Error
    > =>
    async ({ url, method, data, params, headers }) => {
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
                headers,
            });

            return { data: result.data };
        } catch (error) {
            const axiosError = error as AxiosError;

            return {
                error: {
                    status: axiosError.response?.status,
                    data: axiosError.response?.data || axiosError.message,
                },
            };
        }
    };

export { axiosBaseQuery };
