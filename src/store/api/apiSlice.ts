import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

// export const { useGetUsersQuery } = apiSlice;
// export default apiSlice.reducer;

// import { useGetUsersQuery } from "@/store/api/apiSlice";

// const Users = () => {
//   const { data, error, isLoading } = useGetUsersQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching users</p>;

//   return (
//     <ul>
//       {data?.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default Users;

// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "@/store/slices/counter";
// import { RootState } from "@/store/store";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state: RootState) => state.counter.value);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );
// };

// export default Counter;
