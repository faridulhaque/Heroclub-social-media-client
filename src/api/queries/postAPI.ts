import { apiSlice } from "../rootapi/apiSlice";


const postApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createPost: builder.mutation({
      query: (data: any) => ({
        url: "/post/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
        body: data,
      }),
    }),
  }),
});

export const {useCreatePostMutation} = postApi;