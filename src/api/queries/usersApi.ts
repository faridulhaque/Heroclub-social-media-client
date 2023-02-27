import { apiSlice } from "../rootapi/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // update user profile
    updateProfile: builder.mutation({
      query: (data: any) => ({
        url: `/users/update/${data._id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
        body: data,
      }),
      providesTags: ["update_profile"],
    }),
    // get loggedIn user information

    getSpecificUser: builder.query({
      query: (id: any) => ({
        url: `/users/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
      invalidatesTags: ["update_profile"],
    }),

    // get all user for friend suggestion
    getAllUser: builder.query({
      query: () => ({
        url: `/users/all`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
    }),
    // get friend suggestion
    friendSuggestion: builder.query({
      query: (id: string) => ({
        url: `/users/suggestion/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
      providesTags: ["suggestion"],

    }),

    // get the friends list
    friendList: builder.query({
      query: (id: string) => ({
        url: `/users/${id}/friends`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
      providesTags: ["friend"],
    }),

    // delete previous profile picture after update the profile
    deletePrevImage: builder.mutation({
      query: (data: any) => ({
        url: `/users/del_prev`,
        method: "POST",

        body: data,
      }),
    }),

    // add or delete followers/friends
    addOrRemoveFriend: builder.mutation({
      query: (data: any) => ({
        url: `/users/${data.id}/${data.friendId}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },

        body: data,
      }),
      invalidatesTags: ["friend", "suggestion", 'feedPosts'],

    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useGetSpecificUserQuery,
  useDeletePrevImageMutation,
  useGetAllUserQuery,
  useAddOrRemoveFriendMutation,
  useFriendListQuery,
  useFriendSuggestionQuery,
} = usersApi;
