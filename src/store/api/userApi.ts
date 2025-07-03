// src/redux/api/userApi.ts
import { baseApi } from "./baseApiSlice";

// Define User and Pagination types
type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
};

type PaginationParams = {
    page: number;
    limit: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    search?: string;
};

type PaginatedResponse<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // CREATE - Create new user
        createUser: builder.mutation<User, Omit<User, "id">>({
            query: (newUser) => ({
                url: "/api/v1/auth/signup",
                method: "post",
                data: newUser,
            }),
            // Invalidate user lists
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),

        // READ - Get single user
        getUser: builder.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "get",
            }),
            providesTags: (result) =>
                result ? [{ type: "User", id: result.id }] : ["User"],
        }),

        // READ - Get paginated user list
        getUsers: builder.query<PaginatedResponse<User>, PaginationParams>({
            query: (params) => ({
                url: "/users",
                method: "get",
                params: {
                    page: params.page,
                    limit: params.limit,
                    sort: params.sortBy,
                    order: params.sortOrder,
                    search: params.search,
                },
            }),
            // Provides tag for list invalidation
            providesTags: (result) => [
                ...(result?.data || []).map(({ id }) => ({
                    type: "User" as const,
                    id,
                })),
                { type: "User", id: "LIST" },
            ],
        }),

        // UPDATE - Update user
        updateUser: builder.mutation<User, Partial<User>>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "put",
                data: user,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "User", id: arg.id },
                { type: "User", id: "LIST" }, // Invalidate lists
            ],
        }),

        // DELETE - Delete user
        deleteUser: builder.mutation<void, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "delete",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "User", id },
                { type: "User", id: "LIST" },
            ],
        }),

        // BULK UPDATE (Example)
        updateUsersStatus: builder.mutation<
            void,
            { ids: string[]; status: boolean }
        >({
            query: ({ ids, status }) => ({
                url: "/users/bulk-status",
                method: "patch",
                data: { ids, status },
            }),
            invalidatesTags: (result, error, arg) => [
                ...arg.ids.map((id) => ({ type: "User", id })),
                { type: "User", id: "LIST" },
            ],
        }),
    }),
});

// Export hooks for components
export const {
    useCreateUserMutation,
    useGetUserQuery,
    useGetUsersQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useUpdateUsersStatusMutation,
} = userApi;
