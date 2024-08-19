
import { API } from "@/state/api";

export const authSliceApi = API.injectEndpoints({
    endpoints: (builder) => {
        return ({
            postLogin: builder.mutation({
                query: (payload) => ({
                  url: "api/auth/login",
                  method: "POST",
                  body: payload,
                }),
            }),
            postSignUp: builder.mutation({
                query: (payload) => ({
                  url: "api/auth/signup",
                  method: "POST",
                  body: payload,
                }),
            })
    })
}})

export const { usePostLoginMutation,
    usePostSignUpMutation, } = authSliceApi