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

  if (query.isLoading) return <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">API status: Loading</span>
  if (query.isError) return <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">API status: {query.error.message}</span>

  return (
    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">API status: ok</span>
  );
};