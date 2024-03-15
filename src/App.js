import { useForm } from 'react-hook-form';
import { ApiStatus } from './ApiStatus';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import "./App.css";

const queryClient = new QueryClient()

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Expense Added:\nAmount: ${data.amount}\nDescription: ${data.description}`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app w-full">
        <header className="bg-blue-500 text-white text-lg p-4 fixed top-0 w-full">
          <span>My Simple Expenses</span><br /><ApiStatus />
        </header>
        <div className="main-content pt-16 p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                id="amount"
                {...register('amount', { required: true })}
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.amount && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                {...register('description', { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="3"
              ></textarea>
              {errors.description && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">
              Add Expense
            </button>
          </form>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
