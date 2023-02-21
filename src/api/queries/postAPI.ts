import { apiSlice } from "../rootapi/apiSlice";


const postApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createPost: builder.mutation({
      query: (data: any) => ({
        url: "/post",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useCreatePostMutation} = postApi;