import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ExpensesList from './ExpensesList';

import "./App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app w-full">
        <header className="bg-blue-500 text-white text-lg p-4 fixed top-0 w-full">
          <span>My Simple Expenses</span><br />
        </header>
        <div className="main-content pt-16 p-4">
          <ExpensesList />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
