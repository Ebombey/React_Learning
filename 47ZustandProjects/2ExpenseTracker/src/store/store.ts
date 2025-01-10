import { create } from "zustand";

type Expense = {
  id: number;
  description: string;
  amount: number;
};

type ExpenseStore = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
};

export const useStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (expense: Expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  removeExpense: (id: number) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));
