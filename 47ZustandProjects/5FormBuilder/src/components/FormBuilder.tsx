import React, { useState } from "react";
import { useFormStore } from "../store/useFormStore.ts";
import FormField from "./FormField.tsx";

type NewFieldType = {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
};

const FormBuilder = () => {
  const { formFields, addField, removeField, resetForm, updateField } =
    useFormStore();

  const [newField, setNewField] = useState<NewFieldType>({
    label: "",
    type: "text",
    value: "",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddField = () => {
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
  };

  const handleFieldUpdate = (index: number, updatedField: NewFieldType) => {
    updateField(index, updatedField);
  };

  const handleFieldRemove = (index: number) => {
    removeField(index);
  };

  return (
    <div className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-center">Form Builder</h1>

      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="label"
          placeholder="Field Label"
          value={newField.label}
          onChange={handleFieldChange}
          className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select name="type" value={newField.type} onChange={handleFieldChange}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="textarea">Text Area</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddField}
            className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Add Field
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-700"
          >
            Reset Form
          </button>
        </div>
      </div>

      <form>
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            index={index}
            onUpdate={handleFieldUpdate}
            onRemove={handleFieldRemove}
          />
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
