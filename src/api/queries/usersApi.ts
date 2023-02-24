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
    }),
    // get loggedIn user information

    getLoggedInUser: builder.query({
      query: (id: any) => ({
        url: `/users/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "null"
          )}`,
        },
      }),
    }),

    // delete previous profile picture after update the profile
    deletePrevImage: builder.mutation({
      query: (data: any) => ({
        url: `/users/del_prev`,
        method: "POST",

        body: data,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation, useGetLoggedInUserQuery, useDeletePrevImageMutation } = usersApi;
