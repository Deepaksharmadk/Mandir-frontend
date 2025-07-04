import { baseApi } from "../api/baseApiSlice";

// Creator details
export interface Creator {
    _id: string;
    name: string;
    email: string;
}

// Image entry object
export interface ImageData {
    _id: string;
    imageUrl: string[];
    creater: Creator;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Full API response for image retrieval
export interface ImageResponse {
    message: string;
    images: ImageData[];
}

// Inject image endpoints into baseApi
export const imageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllImages: builder.query<ImageResponse, void>({
            query: () => ({
                url: "/api/v1/image/all-images",
                method: "GET",
            }),
            providesTags: [{ type: "Image", id: "LIST" }],
        }),

        // (Optional) add other endpoints like createImage, deleteImage, etc.
    }),
    overrideExisting: false,
});

// Export hooks for usage in components
export const { useGetAllImagesQuery } = imageApi;
