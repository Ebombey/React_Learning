import { create } from "zustand";

type FormFields = {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
};

type FormStoreState = {
  formFields: FormFields[];
  addField: (field: FormFields) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormFields) => void;
  resetForm: () => void;
};

export const useFormStore = create<FormStoreState>((set) => ({
  formFields: [],

  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),

  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),

  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updatedField : field
      ),
    })),

  resetForm: () => set({ formFields: [] }),
}));
