import { useQuery } from "@tanstack/react-query";

const fetchApiStatus = () => {
  return fetch("https://my-simple-expenses-api.onrender.com/up")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Something went wrong. Try again.")
      }

      return response.status;
    })
}

export const ApiStatus = () => {
  const query = useQuery({ queryKey: ['api_status'], queryFn: fetchApiStatus })

  if (query.isLoading) return <p>Loading...</p>
  if (query.isError) return <p>{query.error.message}</p>

  return (
    <div>{query.data}</div>
  );
};