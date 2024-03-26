import React from 'react';
import { useQuery } from '@tanstack/react-query';


// Mock data - replace this with your actual data fetching logic
const expenses = [
  { id: 1, description: 'Coffee', price: 5 },
  { id: 2, description: 'Books', price: 20 },
  { id: 3, description: 'Groceries', price: 55 },
];

const fetchExpenses = async () => {
  return fetch("https://my-simple-expenses-api.onrender.com/expenses")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Something went wrong. Try again.")
      }

      return response.json();
    })
}

const ExpensesList = () => {
  const expensesQuery = useQuery({queryKey: ["expenses"], queryFn: fetchExpenses})

  console.log(expensesQuery.data);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-gray-700">
        <thead className="text-xs uppercase bg-blue-500 text-white">
          <tr>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {expensesQuery.isLoading && <tr><td colSpan="2" className="py-4 px-6">Loading...</td></tr>}
          {expensesQuery.isSuccess && expensesQuery.data.map((expense, index) => (
            <tr key={expense.id} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
            <td className="py-4 px-6">
              {expense.description}
            </td>
            <td className="py-4 px-6">
              ${expense.price}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
