import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `comments/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
} = productApi;
