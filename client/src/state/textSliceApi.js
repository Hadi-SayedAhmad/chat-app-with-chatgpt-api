
import { API } from "@/state/api";

export const textSliceApi = API.injectEndpoints({
    endpoints: (builder) => {
        return ({
            postAiText: builder.mutation({
                query: (payload) => ({
                    url: "api/openai/text",
                    method: "POST",
                    body: payload

                })
            })
        })
    }
})

export const { usePostAiTextMutation } = textSliceApi