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

    // like and unlike post
    actionLike: builder.mutation({
      query: (data: any) => ({
        url: "/posts/like",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
        body: data,
      }),
    }),

    // make comment
    actionComment: builder.mutation({
      query: (data: any) => ({
        url: "/posts/comment",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
        body: data,
      }),
    }),

    // get comments of a post
    allComments: builder.query({
      query: (id: any) => ({
        url: `posts/comments/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useActionLikeMutation,
  useActionCommentMutation,
  useAllCommentsQuery,
} = postApi;
