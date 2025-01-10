import { useState } from "react";
import { useStore } from "../store/store.ts";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();
  const [amount, setAmount] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") return;

    addExpense({
      id: Date.now(),
      description: description,
      amount: Number(amount),
    });

    setDescription("");
    setAmount("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-purple-700">
          Expense Tracker
        </h1>

        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 transition duration-200 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            value={amount}
            placeholder="Expense Amount"
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full px-4 py-2 transition duration-200 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={handleAddExpense}
            className="w-full px-4 py-2 text-white transition duration-200 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add Expense
          </button>
        </div>

        <ul className="mb-6 space-y-4">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center justify-between p-4 transition-transform transform bg-purple-100 rounded-lg shadow-md hover:scale-105"
            >
              <span className="font-semibold text-gray-800">
                {expense.description} :{" "}
                <span className="text-purple-600">
                  ${expense.amount.toFixed(2)}
                </span>
              </span>

              <button
                onClick={() => removeExpense(expense.id)}
                className="px-3 py-1 text-white transition duration-200 bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-purple-700">
            Total Expense :
            <span className="text-purple-600">
              $
              {expenses
                .reduce((total, expense) => total + expense.amount, 0)
                .toFixed(2)}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
