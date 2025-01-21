import { create } from "zustand";

type PasswordStore = {
  length: number;
  includeNumber: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumber: () => void;
  toggleSymbols: () => void;
  toggleUppercase: () => void;
  toggleLowercase: () => void;
  generatePassword: () => void;
};

const usePasswordStore = create<PasswordStore>((set) => ({
  length: 8,
  includeNumber: true,
  includeSymbols: false,
  includeUppercase: true,
  includeLowercase: true,
  generatedPassword: "",

  setLength: (length) => set({ length }),
  toggleNumber: () => set((state) => ({ includeNumber: !state.includeNumber })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),

  generatePassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";

      let characters = "";

      if (state.includeNumber) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUppercase) characters += uppercase;
      if (state.includeLowercase) characters += lowercase;

      let password = "";

      for (let i = 0; i < state.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

      return { generatedPassword: password };
    }),
}));

export default usePasswordStore;
