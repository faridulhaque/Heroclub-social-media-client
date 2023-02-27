import { apiSlice } from "../rootapi/apiSlice";


const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    userPosts: builder.query({
      query: (id: String) => ({
        url: `/posts/all/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
    }),

    allPosts: builder.query({
      query: (id:String) => ({
        url: `/posts/feed/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
      providesTags: ['feedPosts']
    }),

    deletePost: builder.mutation({
      query: (id: String) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
    }),
  }),
});

export const {useUserPostsQuery, useDeletePostMutation, useAllPostsQuery} = postsApi;
