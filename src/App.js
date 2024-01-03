import "./App.css";

function App() {
  return (
    <div class="app h-screen w-full">
      <header class="bg-blue-500 text-white text-lg p-4 fixed top-0 w-full">
        My Simple Expenses
      </header>
      <div class="main-content pt-16 p-4">
        <button class="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default App;
